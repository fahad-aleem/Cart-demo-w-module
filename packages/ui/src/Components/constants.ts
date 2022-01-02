export const sampleSwitchComponentData = [
  {
    title: "Small",
    switchParameters: [
      {
        label: "Default",
        component: { size: "sm" },
        marginRight: 2,
      },
      {
        label: "Disabled",
        component: { size: "sm", isDisabled: true },
        marginRight: 2,
      },
      {
        label: "Checked (disabled)",
        component: { size: "sm", isDisabled: true, isChecked: true },
      },
    ],
  },
  {
    title: "Medium (default)",
    switchParameters: [
      {
        label: "Default",
        component: { size: "md" },
        marginRight: 2,
      },
      {
        label: "Disabled",
        component: { size: "md", isDisabled: true },
        marginRight: 2,
      },
      {
        label: "Checked (disabled)",
        component: { size: "md", isDisabled: true, isChecked: true },
      },
    ],
  },
  {
    title: "Large",
    switchParameters: [
      {
        label: "Default",
        component: { size: "lg" },
        marginRight: 2,
      },
      {
        label: "Disabled",
        component: { size: "lg", isDisabled: true },
        marginRight: 2,
      },
      {
        label: "Checked (disabled)",
        component: { size: "lg", isDisabled: true, isChecked: true },
      },
    ],
  },
];

export const sampleButtonComponentData = [
  {
    marginBottom: 2,
    buttonData: [
      {
        marginRight: 1,
        label: "Button",
        variant: "goldn",
      },
      {
        label: "Disabled",
        variant: "goldn",
        isDisabled: true,
      },
    ],
  },
  {
    marginBottom: 2,
    buttonData: [
      {
        marginRight: 1,
        label: "Secondary",
        variant: "secondary",
      },
      {
        label: "Disabled",
        variant: "secondary",
        isDisabled: true,
      },
    ],
  },
  {
    buttonData: [
      {
        marginRight: 1,
        label: "Outline",
        variant: "outline",
      },
      {
        label: "Disabled",
        variant: "outline",
        isDisabled: true,
      },
    ],
  },
];

export const sampleButtonSizeData = [
  ["Small", "sm"],
  ["Medium (default)", "md"],
  ["Large", "lg"],
];

export const sampleRadioComponentData = [
  {
    label: "Checkbox",
    marginRight: 4,
  },
  {
    label: "Disabled",
    marginRight: 4,
    isDisabled: true,
  },
  {
    label: "Check Disabled",
    marginRight: 4,
    isChecked: true,
    isDisabled: true,
  },
  {
    label: "Indeterminate",
    marginRight: 4,
    isIndeterminate: true,
  },
  {
    label: "Indeterminate Disabled",
    marginRight: 4,
    isIndeterminate: true,
    isDisabled: true,
  },
];

export const sampleTextareaComponentData = [
  {},
  {
    placeholder: "Placeholder",
  },
  {
    placeholder: "Placeholder",
    isDisabled: true,
  },
];
