import React from "react";
import { List, ListItem, Button, Box } from "@chakra-ui/react";

export const IncompleteTodos = ({ todos, onClickDelete }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={10} w={"368px"} mx="auto">
      <List spacing={3} w="100%">
        {todos.map((todo) => (
          <ListItem key={todo.id} display="flex" justifyContent="center" alignItems="center" fontSize="xl">
            <Box display="flex" alignItems="center" justifyContent="center" w="100%">
              {todo.id}: {todo.text} - {todo.details} {/* ID、タイトル、詳細を表示 */}
              <Button onClick={() => onClickDelete(todo.id)} colorScheme="red" ml={2}>
                削除
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
