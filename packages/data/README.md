# @goldn/data

<p align="center">
    <img src="https://avatars.githubusercontent.com/u/78441134?s=200&v=4" height="200">
</p>

## Purpose

<b>this module provides all you need for data-fetching including the client</b>

## Development

```bash
yarn workspace @goldn/data generate
```

will generate types for all used queries in this module. pass `--watch` to this command for the app which utilizes this module and want to actively develop on queries.
e.g. in root package.json `"concurrently \"yarn workspace @goldn/brands-app dev\" \"yarn workspace @goldn/data generate --watch\""` which wil run them in parallel.

example usages:

```typescript
//query.ts
import { gql } from "graphql-request";
//types are automatically generated in tpyes folder, just re-export the root type!
export type { UserList as UserListType } from "./_generated/UserList";

export const UserQuery = gql`
  query UserList {
    users {
      totalCount
    }
  }
`;

// component
import { useQuery, UserListType } from "@goldn/data";
export const UserListComponent = () => {
  const { data, error, isLoading } = useQuery<UserListType>(UserQuery);

  if (error) {
    return <div>ups, something went wrong: {error.message}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return <div>totalcount users: {data.users.totalCount}</div>;
};
```

with cursor pagination:

```typescript
//query
import { gql } from "graphql-request";

export type { TestPagination as TestPaginationType } from "./_generated/testPagination";

export const UserQuery = gql`
  query TestPagination($cursor: String, $limit: Int) {
    users(first: $limit, after: $cursor) {
      totalCount
      edges {
        node {
          name
          id
          active
        }
        cursor
      }
    }
  }
`;

// component.ts
import { useState } from "react";
import { UserQuery, TestPaginationType } from "@goldn/data";

export const UserListComponent = () => {
  const [cursor, setCursor] = useState(null);
  const { data, error, isLoading } = useQuery<testPaginationType>(UserQuery, {
    cursor,
    limit: 2,
  });

  const fetchMore = () => {
    setCursor(data.users.edges[data.users.edges.length - 1].cursor);
  };

  if (error) {
    return <div>ups, something went wrong: {error.message}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div>totalcount users: {data.users.totalCount}</div>
      {data.users.edges.map(({ node: { id, active, name } }) => {
        return (
          <div key={id}>
            name:{name}, active: {active ? "yes" : "no"}
          </div>
        );
      })}
      <button onClick={fetchMore}>fetchMore!</button>
    </>
  );
};
```
