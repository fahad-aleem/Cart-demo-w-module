import { act, screen, render } from "@testing-library/react";

import { NotificationCenter } from "./NotificationCenter";

describe("Notifications", () => {
  it("should render activity button", async () => {
    act(() => {
      render(<NotificationCenter />);
    });

    expect(await screen.findByTestId("activity-button")).toBeVisible();
  });

  it("should render notification list when activity button is clicked", async () => {
    act(() => {
      render(<NotificationCenter />);
    });

    screen.getByTestId("activity-button").click();

    expect(await screen.findByText("Activity")).toBeVisible();
  });
});
