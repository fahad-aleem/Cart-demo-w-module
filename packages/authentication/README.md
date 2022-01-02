# @goldn/authentication

<p align="center">
    <img src="https://avatars.githubusercontent.com/u/78441134?s=200&v=4" height="200">
</p>

## Purpose

This module contains the logic to authenticate the user. It uses Auth0 react SDK to display a login popup.

## Usage

To use this module, it must be imported in package.json

```
 "dependencies": {
    "@goldn/authentication": "0.0.0",
    .....
  }
```

### AuthProvider

The component `AuthProvider` should wrap the main component of the application.

```typescript
//pages/_app.tsx
import { AppProps } from "next/app";
import { AuthProvider } from "@goldn/authentication";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
```

### IfAuthorized component

The module also exports an `IfAuthorized` component which can be used to conditionally show or hide the children.

```
//components/sidebar.tsx
import { IfAuthorized, PERMISSIONS } from "@goldn/authentication";
import Link from "next/link";
    <IfAuthorized permission={PERMISSIONS.VIEW_TASKS}>
        <Link href="/tasks"> Tasks </Link>
    </IfAuthorized>
```

The above will display the link conditionally only if the currently loggedIn user is allowed to view tasks

If there is an if-else scenario where if user is not allowed to view something and instead he should see something else otherwise can also be used.

```
//components/sidebar.tsx
import { IfAuthorized, PERMISSIONS } from "@goldn/authentication";
import Link from "next/link";
    <IfAuthorized
      permission={PERMISSIONS.VIEW_TASKS}
      otherwise={<div> Create your task </div>}
    >
        <Link href="/tasks"> Tasks </Link>
    </IfAuthorized>
```

### useAuth

This hook is a re-export of useAuth0 hook. It can be used as follows

```
const { user, isAuthenticated, isLoading } = useAuth();
```
