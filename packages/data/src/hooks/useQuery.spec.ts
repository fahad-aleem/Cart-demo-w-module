import useMockServer from "@jestConfig/useMockServer";
import { renderHook } from "@testing-library/react-hooks";
import * as graphqlRequest from "graphql-request";
import { graphql } from "msw";

import { useQuery } from "./useQuery";

describe("useQuery", () => {
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
    graphql.query<UserList, { filter: number }>("UserList", (req, res, ctx) => {
      const { filter } = req.variables;

      if (filter) {
        return res(
          ctx.data({
            users: {
              __typename: "UserConnection",
              totalCount: filter,
            },
          })
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
  ];

  useMockServer(handlers);

  it("should fetch", async () => {
    const fetchSpy = jest.spyOn(graphqlRequest, "request");
    const { result, waitForNextUpdate } = renderHook(() =>
      useQuery<UserList>(UserQuery)
    );

    await waitForNextUpdate();

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(result.current.error).toStrictEqual(undefined);
    expect(result.current.data).toStrictEqual({
      users: {
        __typename: "UserConnection",
        totalCount: 5,
      },
    });
  });

  it("should fetch with variables", async () => {
    const fetchSpy = jest.spyOn(graphqlRequest, "request");
    const { result, waitForNextUpdate } = renderHook(() =>
      useQuery<UserList, { filter: number }>(UserQuery, { filter: 3 })
    );

    await waitForNextUpdate();

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(result.current.error).toStrictEqual(undefined);
    expect(result.current.data).toStrictEqual({
      users: {
        __typename: "UserConnection",
        totalCount: 3,
      },
    });
  });

  it("should refetch on variables change", async () => {
    const fetchSpy = jest.spyOn(graphqlRequest, "request");
    let filter = 4;

    const { result, waitForNextUpdate, rerender } = renderHook(() =>
      useQuery<UserList, { filter: number }>(UserQuery, { filter })
    );

    await waitForNextUpdate();

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(result.current.error).toStrictEqual(undefined);
    expect(result.current.data).toStrictEqual({
      users: {
        __typename: "UserConnection",
        totalCount: 4,
      },
    });

    filter = 10;
    rerender();

    await waitForNextUpdate();

    expect(fetchSpy).toHaveBeenCalledTimes(2);
    expect(result.current.error).toStrictEqual(undefined);
    expect(result.current.data).toStrictEqual({
      users: {
        __typename: "UserConnection",
        totalCount: 10,
      },
    });
  });
});
