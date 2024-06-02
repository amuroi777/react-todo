import { Button, Stack } from "@chakra-ui/react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div>
      <div>
        <label>
          タイトル
          <input placeholder="タイトル" value={todoText} onChange={onChange} />
        </label>
      </div>

      <input placeholder="詳細" value={todoText} onChange={onChange} />
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="teal" variant="solid" onClick={onClick}>
          追加
        </Button>
      </Stack>
    </div>
  );
};
