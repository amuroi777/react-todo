import { Button, Stack, Box, Text, Input } from "@chakra-ui/react";
import { useState } from "react";

export const InputTodo = (props) => {
  const { todoText, details, onChange, onChangeDetails, onClick } = props;
  const [titleLength, setTitleLength] = useState(todoText.length);
  const [detailsLength, setDetailsLength] = useState(details.length);
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setTitleError(false);
      onChange(e);
    } else {
      setTitleError(true);
    }
    setTitleLength(value.length);
  };

  const handleDetailsChange = (e) => {
    const value = e.target.value;
    if (value.length <= 100) {
      setDetailsError(false);
      onChangeDetails(e);
    } else {
      setDetailsError(true);
    }
    setDetailsLength(value.length);
  };

  return (
    <Box background={"blue.50"}>
      <Box pt={10} display="flex" flexDirection="column" alignItems="left" justifyContent="center" w={"368px"} mx="auto">
        <Box mb={4}>
          <label>
            <Text fontSize="3xl" fontWeight="bold" textAlign="center">
              TODO
            </Text>
            <Input placeholder="タイトル" value={todoText} onChange={handleTitleChange} mt={2} />
            {titleError && <Text color="red.500">50文字以内で入力してください。</Text>}
          </label>
        </Box>

        <Input placeholder="詳細" value={details} onChange={handleDetailsChange} mb={4} />
        {detailsError && <Text color="red.500">100文字以内で入力してください。</Text>}

        <Stack direction="row" justify="center" spacing={4}>
          <Button mt={7} mb={10} colorScheme="teal" variant="solid" onClick={onClick}>
            追加
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
