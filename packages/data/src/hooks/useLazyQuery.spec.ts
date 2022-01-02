import useMockServer from "@jestConfig/useMockServer";
import { act, renderHook } from "@testing-library/react-hooks";
import * as graphqlRequest from "graphql-request";
import { graphql } from "msw";

import { useLazyQuery } from "./useLazyQuery";

describe("useLazyQuery", () => {
  let failsOnNextCall: boolean;

  beforeEach(() => {
    failsOnNextCall = false;
  });

  const UserQuery = `
    query UserList {
        users {
            totalCount
    }
  }`;

  interface UserList_users {
    __typename: "UserConnection";
    totalCount: number;
  }

  interface UserList {
    users: UserList_users;
  }

  const handlers = [
    graphql.query<UserList>("UserList", (req, res, ctx) => {
      if (failsOnNextCall) {
        return res(
          ctx.errors([
            {
              message: "Failed to log in: username or password are invalid",
              locations: [
                {
                  line: 8,
                  column: 12,
                },
              ],
            },
          ])
        );
      }
      return res(
        ctx.data({
          users: {
            __typename: "UserConnection",
            totalCount: 5,
          },
        })
      );
    }),
    graphql.query<UserList>("failingQuery", (req, res, ctx) => {
      return res(
        ctx.errors([
          {
            message: "Failed to log in: username or password are invalid",
            locations: [
              {
                line: 8,
                column: 12,
              },
            ],
          },
        ])
      );
    }),
  ];

  useMockServer(handlers);

  it("should not fetch on instanziation", async () => {
    const fetchSpy = jest.spyOn(graphqlRequest, "request");

    renderHook(() => useLazyQuery<UserList>(UserQuery));

    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("should fetch on trigger", async () => {
    const fetchSpy = jest.spyOn(graphqlRequest, "request");
    const { result, waitForNextUpdate } = renderHook(() =>
      useLazyQuery<UserList>(UserQuery)
    );

    act(() => {
      result.current.trigger();
    });

    await waitForNextUpdate();

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(result.current.error).toStrictEqual(null);
    expect(result.current.data).toStrictEqual({
      users: {
        __typename: "UserConnection",
        totalCount: 5,
      },
    });
  });

  it("should call callback onSuccess", async () => {
    const successStub = jest.fn();
    const { result, waitForNextUpdate } = renderHook(() =>
      useLazyQuery<UserList>(UserQuery)
    );

    act(() => {
      result.current.trigger(undefined, { onSuccess: successStub });
    });

    await waitForNextUpdate();

    expect(successStub).toHaveBeenCalledTimes(1);
    expect(successStub).toHaveBeenCalledWith({
      users: {
        __typename: "UserConnection",
        totalCount: 5,
      },
    });
  });

  it("should have correct error object", async () => {
    const fetchSpy = jest.spyOn(graphqlRequest, "request");
    const { result, waitForNextUpdate } = renderHook(() =>
      useLazyQuery<UserList>(
        `
        query failingQuery {
            login {
                id
            }
        }
      `
      )
    );

    act(() => {
      result.current.trigger();
    });

    await waitForNextUpdate();

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(result.current.error?.message).toContain(
      "Failed to log in: username or password are invalid"
    );
    expect(result.current.data).toBe(null);
  });

  it("should update response properly if error occured", async () => {
    const fetchSpy = jest.spyOn(graphqlRequest, "request");
    const { result, waitForNextUpdate } = renderHook(() =>
      useLazyQuery<UserList>(UserQuery)
    );

    act(() => {
      result.current.trigger();
    });

    await waitForNextUpdate();

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(result.current.error).toStrictEqual(null);
    expect(result.current.data).toStrictEqual({
      users: {
        __typename: "UserConnection",
        totalCount: 5,
      },
    });

    failsOnNextCall = true;

    act(() => {
      result.current.trigger();
    });

    await waitForNextUpdate();

    expect(result.current.error?.message).toContain(
      "Failed to log in: username or password are invalid"
    );
    expect(result.current.data).toStrictEqual(null);
  });

  it("should call callback onError", async () => {
    const errorStub = jest.fn();
    const { result, waitForNextUpdate } = renderHook(() =>
      useLazyQuery<UserList>(UserQuery)
    );

    failsOnNextCall = true;

    act(() => {
      result.current.trigger(undefined, { onError: errorStub });
    });

    await waitForNextUpdate();

    expect(errorStub).toHaveBeenCalledTimes(1);
  });
});
