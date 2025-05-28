import { useState } from 'react';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (todo.trim() === "") return; // Prevent adding empty todos
    setTodos([...todos, { id: Date.now(), text: todo, isCompleted: false }]);
    setTodo("");
  };

  const handleEdit = (id) => {
    const updatedText = prompt("Edit your todo:");
    if (updatedText && updatedText.trim() !== "") {
      setTodos(
        todos.map((item) =>
          item.id === id ? { ...item, text: updatedText } : item
        )
      );
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar />
     
    
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold my-5">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2 border border-gray-300 rounded-md p-2"
            placeholder="Enter a todo"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6"
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todo-list mt-4">
          {todos.map((item) => (
            <div key={item.id} className="todo flex justify-between items-center border-b py-2">
              <div className="text">{item.text}</div>
              <div className="buttons flex">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {todos.length === 0 && <p className="text-gray-500 mt-4">No todos yet. Add some!</p>}
        </div>
      </div>
      
    </>
  );
}

export default App;
