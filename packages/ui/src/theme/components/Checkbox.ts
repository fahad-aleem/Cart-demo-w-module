const Checkbox = {
  variants: {
    goldn: {
      control: {
        bg: "white",
        border: "1px",
        borderColor: "gray.200",
        borderRadius: "2px",
        _hover: {
          border: "1px",
          borderColor: "gray.400",

          _disabled: {
            border: "1px",
            borderColor: "gray.200",
          },
        },
        _checked: {
          bg: "black",
          border: "1px solid black",
          _hover: {
            bg: "black",
            border: "1px solid black",
          },
          _disabled: {
            color: "white",
            bg: "gray.200",
            border: "1px",
            borderColor: "gray.200",
          },
        },
        _indeterminate: {
          bg: "black",
          border: "1px solid black",
          _hover: {
            bg: "black",
            border: "1px solid black",
          },
          _disabled: {
            color: "white",
            bg: "gray.200",
            border: "1px",
            borderColor: "gray.200",
          },
        },
        _disabled: {
          bg: "white",
          border: "1px",
          borderColor: "gray.200",
        },
      },
      label: {
        ml: "16px",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "22.4px",

        _disabled: {
          color: "gray.200",
        },
      },
    },
  },
};

export default Checkbox;
