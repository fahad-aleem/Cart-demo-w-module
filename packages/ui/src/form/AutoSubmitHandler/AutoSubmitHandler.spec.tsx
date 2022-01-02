import { act, fireEvent, render, screen } from "@testing-library/react";

import { Form, FormInput, FormRadio } from "..";

describe("AutoSubmitHandler", () => {
  it("should not fire submit if form is not valid on blur", async () => {
    const onSubmit = jest.fn();
    const requiredOptions = { required: true };

    await act(async () => {
      render(
        <Form<{ requiredname: string; username: string }>
          onSubmit={onSubmit}
          autoSubmit
          useFormProps={{ mode: "onBlur", reValidateMode: "onBlur" }}
        >
          <FormInput
            name="requiredname"
            registerOptions={requiredOptions}
            label="RequiredName"
          />
          <FormInput name="username" label="Username" />
          <button type="submit">SUBMIT</button>
        </Form>
      );
    });

    const requiredInput = screen.getByTestId("requiredname");
    const optionalInput = screen.getByTestId("username");

    await act(async () => {
      requiredInput.focus();
      optionalInput.focus();
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("should not fire submit if form is not valid on blur with defaultValues", async () => {
    const onSubmit = jest.fn();
    const requiredOptions = { required: true };

    await act(async () => {
      render(
        <Form<{ requiredname: string; username: string }>
          onSubmit={onSubmit}
          autoSubmit
          useFormProps={{
            mode: "onBlur",
            reValidateMode: "onBlur",
            defaultValues: { requiredname: "foo", username: "" },
          }}
        >
          <FormInput
            name="requiredname"
            registerOptions={requiredOptions}
            label="RequiredName"
          />
          <FormInput name="username" label="Username" />
          <button type="submit">SUBMIT</button>
        </Form>
      );
    });

    const requiredInput = screen.getByTestId("requiredname");
    const optionalInput = screen.getByTestId("username");

    await act(async () => {
      requiredInput.focus();
      optionalInput.focus();
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("should fire submit when required fields are filled out", async () => {
    const onSubmit = jest.fn();
    const requiredOptions = { required: true };

    await act(async () => {
      render(
        <Form<{ requiredname: string; username: string }>
          onSubmit={onSubmit}
          autoSubmit
          useFormProps={{ mode: "onBlur", reValidateMode: "onBlur" }}
        >
          <FormInput
            name="requiredname"
            registerOptions={requiredOptions}
            label="RequiredName"
          />
          <FormInput name="username" label="Username" />
          <button type="submit">SUBMIT</button>
        </Form>
      );
    });

    const requiredInput = screen.getByTestId("requiredname");
    const optionalInput = screen.getByTestId("username");

    await act(async () => {
      requiredInput.focus();
      fireEvent.change(requiredInput, { target: { value: "cheap stuff" } });
      optionalInput.focus();
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("should fire only once when form is valid but havent changed on blur", async () => {
    const onSubmit = jest.fn();
    const requiredOptions = { required: true };

    await act(async () => {
      render(
        <Form<{ requiredname: string; username: string }>
          onSubmit={onSubmit}
          autoSubmit
          useFormProps={{ mode: "onBlur", reValidateMode: "onBlur" }}
        >
          <FormInput
            name="requiredname"
            registerOptions={requiredOptions}
            label="RequiredName"
          />
          <FormInput name="username" label="Username" />
          <button type="submit">SUBMIT</button>
        </Form>
      );
    });

    const requiredInput = screen.getByTestId("requiredname");
    const optionalInput = screen.getByTestId("username");

    await act(async () => {
      requiredInput.focus();
    });
    await act(async () => {
      fireEvent.change(requiredInput, { target: { value: "cheap stuff" } });
    });
    await act(async () => {
      optionalInput.focus();
    });
    await act(async () => {
      requiredInput.focus();
    });
    await act(async () => {
      requiredInput.blur();
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("should fire after submit but again on defaults", async () => {
    const onSubmit = jest.fn();

    await act(async () => {
      render(
        <Form<{ notifications: "mentions" | "important" | "none" }>
          onSubmit={onSubmit}
          autoSubmit
          useFormProps={{
            mode: "onChange",
            defaultValues: { notifications: "mentions" },
          }}
          shouldResetAfterSubmit
        >
          <FormRadio
            label="Important events & @mentions"
            name="notifications"
            value="important"
            registerOptions={{ required: true }}
          />
          <FormRadio
            label="Only & @mentions"
            name="notifications"
            value="mentions"
            registerOptions={{ required: true }}
          />
          <FormRadio
            label="None"
            name="notifications"
            value="none"
            registerOptions={{ required: true }}
          />
        </Form>
      );
    });

    const defaultRadio = screen.getByLabelText("Only & @mentions");
    const otherRadio = screen.getByLabelText("None");

    await act(async () => {
      fireEvent.click(otherRadio);
    });
    await act(async () => {
      fireEvent.click(defaultRadio);
    });

    expect(onSubmit).toHaveBeenCalledTimes(2);
    expect(onSubmit).toHaveBeenCalledWith({ notifications: "none" });
    expect(onSubmit).toHaveBeenCalledWith({ notifications: "mentions" });
  });
});
