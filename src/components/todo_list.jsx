import React from "react";
import "../assets/scss/todo_list.scss";
const TodoList = ({
  lists,
  controlInputSelect,
  deleteTodoList,
  selectFilter,
}) => {
  return lists.length > 0 ? (
    <ul className="list-group list-group-flush mt-3">
      {selectFilter.map((list) => (
        <li className="list-group-item border-bottom" key={list.id}>
          <button
            className="border-0 mr-4 custom-btn"
            onClick={() => controlInputSelect(list.id)}
          >
            {list.selected ? (
              <i className="far fa-check-square"></i>
            ) : (
              <i className="far fa-square"></i>
            )}
          </button>
          {list.text}
          <span
            className="float-right custom-sm-btn"
            onClick={() => deleteTodoList(list.id)}
          >
            <i className="fas fa-trash"></i>
          </span>
        </li>
      ))}
    </ul>
  ) : null;
};

export default TodoList;
