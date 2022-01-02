const Switch = {
  variants: {
    goldn: {
      track: {
        bg: "white",
        border: "1px",
        borderColor: "gray.200",
        _hover: {
          border: "1px",
          borderColor: "gray.400",

          _disabled: {
            bg: "white",
            border: "1px",
            borderColor: "gray.200",
            "> .chakra-switch__thumb": {
              bg: "gray.200",
            },
          },
        },
        _checked: {
          bg: "black",
          border: "1px",
          borderColor: "black",
          _hover: {
            border: "1px",
            borderColor: "black",
            _disabled: {
              bg: "gray.200",
              border: "1px",
              borderColor: "gray.200",
              "> .chakra-switch__thumb": {
                bg: "white",
              },
            },
          },
          _disabled: {
            bg: "gray.200",
            border: "1px",
            borderColor: "gray.200",
            "> .chakra-switch__thumb": {
              bg: "white",
            },
          },
        },
        _disabled: {
          bg: "white",
          border: "1px",
          borderColor: "gray.200",
          "> .chakra-switch__thumb": {
            bg: "gray.200",
          },
        },
      },
      thumb: {
        bg: "black",
        _checked: {
          bg: "white",
        },
      },
    },
  },
};

export default Switch;
