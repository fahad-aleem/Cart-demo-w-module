const Radio = {
  variants: {
    goldn: {
      control: {
        bg: "white",
        border: "1px",
        borderColor: "gray.200",
        _hover: {
          border: "1px",
          borderColor: "gray.400",
        },
        _checked: {
          bg: "white",
          border: "6px",
          borderColor: "black",
          _hover: {
            bg: "white",
            border: "6px",
            borderColor: "black",
          },
          _disabled: {
            bg: "white",
            border: "6px",
            borderColor: "gray.200",
          },
        },
        _disabled: {
          _before: {
            bg: "white",
          },
          bg: "white",
          border: "1px",
          borderColor: "gray.200",
        },
      },
      label: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "140%",
        ml: "16px",

        _disabled: {
          color: "gray.200",
        },
      },
    },
  },
};

export default Radio;
