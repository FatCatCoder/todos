import { useEffect, useState } from 'react';

// components
import AddTodo from './components/AddTodo'
import TodoContainer from './components/TodoContainer'

// simple todo app, inMemory basic array cache, top level api call to feed data to tree components
function App() {
  const [todosData, setTodosData] = useState([]); 

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const callAPI = async () => {
       const res = await fetch('http://localhost:5000/api/todos', {signal: signal});
       const parsed = await res.json();
       return parsed;
      };

    const setTodosASYNC = async() => {
      setTodosData(await callAPI());
    }
    setTodosASYNC();
 

    return () => controller.abort();
  }, [])

  return (
    <div className="container">
      <header className='text-center'>
        <h1>Todos!</h1>
        <h4 className='fst-italic'>The famous app, now built in react and any backend you want!</h4>
        <hr class="rounded" />
      </header>

      <AddTodo />
      <TodoContainer data={todosData} todosData={todosData} setTodosData={setTodosData}/>

    </div>
  );
}

export default App;
