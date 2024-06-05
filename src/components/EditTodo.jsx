import { useState } from "react";
import { Input, Button, Box } from "@chakra-ui/react";

const EditTodo = (props) => {
  const { todo, onSave, onCancel } = props;
  const [editText, setEditText] = useState(todo.text);
  const [editDetails, setEditDetails] = useState(todo.details);

  const handleEditTextChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditDetailsChange = (e) => {
    setEditDetails(e.target.value);
  };

  const handleSave = () => {
    onSave(todo.id, editText, editDetails);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" w={"368px"} mx="auto">
      <Input placeholder="新しいタイトル" value={editText} onChange={handleEditTextChange} mt={2} mb={2} />
      <Input placeholder="新しい詳細" value={editDetails} onChange={handleEditDetailsChange} mt={2} mb={2} />
      <Box display="flex" justifyContent="space-between" w="100%">
        <Button colorScheme="teal" onClick={handleSave} mt={2}>
          保存
        </Button>
        <Button colorScheme="red" onClick={onCancel} mt={2}>
          キャンセル
        </Button>
      </Box>
    </Box>
  );
};

export default EditTodo;
