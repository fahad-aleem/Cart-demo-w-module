## Setup

this repository uses yarn workspaces. Simply run

```bash
yarn install
```

## Add Supplier data

Add supplier data in the load-data.js file

- require("./thomas_new")

## Get the unique service,suppliertype and location

run the command

- To get the unique company types

```bash
node extract-data
```

- To get the unique service type

```bash
node extract-services
```

- To get the unique location

```bash
node extract-locations
```

## Firebase setup

In the one terminal change to marketing app and run this

```bash
- firebase emulators:start
```

Open the other terminal change to marketingapp and run this

```bash
yarn load-data
```

## Change localhost port(Optional)

if firebase port error occur then change the port no of the localhost in load-data.js,firesbase.json and InitializeFirebase.tsx and after this again run the above Firebase setup commands

## Run the command

In the marketing app

```bash
yarn dev
```
