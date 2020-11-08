import React, { useState, useEffect } from "react";
import TodoList from "./todo_list";
import "../assets/scss/todo_form.scss";
const TodoForm = () => {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [selectFilter, setSelectFilter] = useState([]);
  const [selectOpt, setSelectOpt] = useState("all");

  useEffect(() => {
    getLocalTodoList();
  }, []);

  useEffect(() => {
    controlSelect();
    saveLocalTodoList();
  }, [selectOpt, toDoList]);
  const changeInputValue = (e) => {
    setInputText(e.target.value);
  };
  const toDoSubmitted = (e) => {
    e.preventDefault();

    setToDoList([
      ...toDoList,
      {
        text: inputText,
        id: Math.ceil(Math.random() * 100),
        selected: false,
      },
    ]);

    setInputText("");
  };

  const controlInputSelect = (id) => {
    setToDoList(
      toDoList.map((list) => {
        if (list.id === id) {
          return {
            ...list,
            selected: !list.selected,
          };
        }
        return list;
      })
    );
  };

  const deleteTodoList = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const getOptionsValue = (e) => {
    setSelectOpt(e.target.value);
    console.log(selectOpt);
  };
  const controlSelect = (e) => {
    switch (selectOpt) {
      case "completed":
        setSelectFilter(toDoList.filter((list) => list.selected == true));
        break;
      case "incomplete":
        setSelectFilter(toDoList.filter((list) => list.selected !== true));
        break;
      default:
        setSelectFilter(toDoList);
        break;
    }
  };

  const saveLocalTodoList = () => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  };

  const getLocalTodoList = () => {
    if (localStorage.getItem("toDoList") == null) {
      localStorage.setItem("toDoList", JSON.stringify([]));
    } else {
      let toDoListLocal = JSON.parse(localStorage.getItem("toDoList"));
      setToDoList(toDoListLocal);
    }
  };

  return (
    <div className="col-md-4 card">
      <div className="form-header d-flex justify-content-between align-items-center py-4">
        <div className="form-title">
          <h3>Tasks</h3>
        </div>
        <div className="form-filters">
          <span>Sort By : </span>
          <select
            defaultValue="all"
            className="option-select"
            onChange={(e) => getOptionsValue(e)}
          >
            <option value="all">All Lists</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </div>
      <div className="form-body">
        <form onSubmit={toDoSubmitted}>
          <div className="input-group input-group-sm">
            <div className="invalid-feedback">Add New Task</div>
            <input
              type="text"
              className="form-control fix-rounded-right"
              value={inputText}
              onChange={changeInputValue}
              required
            />
            <div className="input-group-prepend">
              <button className="input-group-text custom-btn-2">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <TodoList
        lists={toDoList}
        controlInputSelect={controlInputSelect}
        deleteTodoList={deleteTodoList}
        selectFilter={selectFilter}
      />
    </div>
  );
};

export default TodoForm;
