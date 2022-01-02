# @goldn/ui

<p align="center">
    <img src="https://avatars.githubusercontent.com/u/78441134?s=200&v=4" height="200">
</p>

- [@goldn/ui](#goldnui)
  - [Purpose](#purpose)
  - [Getting Started](#getting-started)
  - [Add new Component](#add-new-component)
  - [Build](#build)
  - [Deploy](#deploy)

## Purpose

<b>this module is intended to include every shareable component.Please include every component to storybook. Storybook will be deployed to give our designers/UX to preview/review all components isolated</b>

## Getting Started

run the development server from root folder:

```bash
yarn workspace @goldn/ui storybook
```

Open the link provided by storybook in terminal and start developing!

- every components story will go into `stories` folder
- every Story is already wrapped with `ChakraProvider` and is using our shared `theme` file.
- storybook is configured to serve public folder for static assets if you need e.g. images for Carousel or similar
- further reading about [storybook docs](https://storybook.js.org/docs/react/get-started/introduction)

## Add new Component

- create a folder in `src` e.g. MyNewGoldnComponent
- add an export entry in `src/index.ts` (publically available) to your component like `export * from './MyNewGoldnComponent` <- if you have an index.ts file, otherwise `export * from './MyNewGoldnComponent/[file.ts]`
- add a story file e.g. `stories/MyNewGoldnComponent`

```typescript
import { Story } from "@storybook/react/types-6-0";
import { MyNewGoldnComponent, MyNewGoldnComponentProps } from "../src/MyNewGoldnComponent";

// This default export determines where your story goes in the story list
export default {
  title: "MyNewGoldnComponent",
  component: MyNewGoldnComponent,
};

const Template: Story<MyNewGoldnComponentProps> = args => <MyNewGoldnComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  myProps: true <- props from outside to your components goes here
} as MyNewGoldnComponentProps; <- to enable typescript autocompletion on props
```

- now start storybook with `yarn workspace @goldn/ui storybook`
- locate your added Component in storybook tree and start develop your component

## Build

```bash
yarn workspace @goldn/ui build-storybook
```

## Deploy

coming soon...
