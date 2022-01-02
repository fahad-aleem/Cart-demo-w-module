const Textarea = {
  variants: {
    goldn: {
      borderRadius: "4px",
      border: "1px",
      borderColor: "gray.200",
      _hover: {
        border: "1px",
        borderColor: "gray.400",
      },
      _focus: {
        border: "1px",
        borderColor: "gray.600",
      },
      "::-webkit-resizer": {
        background:
          'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNCIgeT0iNC42Njk5OCIgd2lkdGg9IjgiIGhlaWdodD0iMS4zMzMiIGZpbGw9IiM2ODY3NjUiLz4KPHJlY3QgeD0iNCIgeT0iMTAiIHdpZHRoPSI4IiBoZWlnaHQ9IjEuMzMzIiBmaWxsPSIjNjg2NzY1Ii8+CjxyZWN0IHg9IjQiIHk9IjcuMzM1MDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEuMzMzIiBmaWxsPSIjNjg2NzY1Ii8+Cjwvc3ZnPgo=")',
      },
      _disabled: {
        bg: "gray.100",
        border: "none",
      },
    },
  },
};

export default Textarea;
