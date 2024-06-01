export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <p>{todo}</p>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
