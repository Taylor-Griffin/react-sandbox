import { useState, useEffect } from 'react';

const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});
  useEffect(() => {
    let waitThree;
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        waitThree = setTimeout(() => {
          setTodo(data);
          setLoading(false);
        }, 3000);
      });
    return clearTimeout(waitThree);
  }, []);

  return loading ? <h3>Loading...</h3> : <div>{todo.title}</div>;
};

export default Todo;
