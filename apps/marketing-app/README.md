## Setup

this repository uses yarn workspaces. Simply run

```bash
yarn install
```

## Prepare data

step 1: Paste the json data in source.json file

Step 2: Run the command in the marketing app directory

```bash
./prepare-data.sh
```

## Firebase setup

In the one terminal change to marketing app and run this

Step 1: install firebase cli:

```bash
npm install -g firebase-tools
```

```bash
firebase emulators:start
```

Step 2: Open the other terminal change to marketingapp and run this

```bash
yarn load-data
```

## Change localhost port(Optional)

if firebase port error occur then change the port no of the localhost in load-data.js and firesbase.json and InitializeFirebase.tsx and after this again run the above Firebase setup commands

## Run the command

In the marketing app

```bash
yarn dev
```

## In the Browser

Open the browser

- localhost:3000 (For homepage)
- localhost:3000/suppliers/ (For suppliers page)
