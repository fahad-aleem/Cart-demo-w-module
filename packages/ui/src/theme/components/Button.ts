// from "@chakra-ui/theme/dist/types/components/button"

const Button = {
  baseStyle: {
    fontWeight: "bold",
    lineHeight: "140%",
    borderRadius: "4px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04);",

    _disabled: {
      bg: "none",
      color: "gray.200",
      border: "1px",
      borderColor: "gray.200",
    },
  },
  variants: {
    goldn: {
      color: "white",
      bg: "green.500",
      _hover: {
        bg: "green.900",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        _disabled: {
          bg: "none",
          color: "gray.200",
          border: "1px",
          borderColor: "gray.200",
          boxShadow: "none",
        },
      },
    },
    secondary: {
      color: "black",
      bg: "gray.100",
      _hover: {
        bg: "gray.200",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        _disabled: {
          bg: "none",
          color: "gray.200",
          border: "1px",
          borderColor: "gray.200",
          boxShadow: "none",
        },
      },
    },
    outline: {
      color: "black",
      bg: "white",
      border: "1px",
      borderColor: "gray.200",
      _hover: {
        bg: "white",
        border: "1px",
        borderColor: "gray.400",
        boxShadow: "none",
        _disabled: {
          bg: "none",
          color: "gray.200",
          border: "1px",
          borderColor: "gray.200",
          boxShadow: "none",
        },
      },
    },
  },
  sizes: {
    lg: {
      fontSize: "16px",
      padding: "12px 30px",
    },
    md: {
      fontSize: "14px",
      padding: "8px 20px",
    },
    sm: {
      fontSize: "12px",
      padding: "4px 10px",
      lineHeight: "150%",
    },
  },
};

export default Button;
