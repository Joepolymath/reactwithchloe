import "./App.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "./features/counter/counterSlice";
import Todo from "./components/Todo";
import "./components/todo.css";
import { RingLoader } from "react-spinners";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  }, []);

  return (
    <div className="app flex items-center flex-col m-5 space-y-5 justify-center">
      {loading ? (
        <RingLoader size={120} />
      ) : (
        <div>
          {data.map((todo) => {
            return (
              <Todo key={todo.id} item={todo.title} chloe={todo.completed} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
