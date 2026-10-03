import { useEffect, useState } from "react";
import axios from "axios"
import Search from "./Search";
function ListPage() {
  const [todos,setTodos] = useState<Todo[]>([])
  const [searchQuery, setsearchQuery] = useState("")
  interface Todo{
    id: string,
    title: string,
    completed: boolean,
  }
  function getTodos(){
    axios.get("http://localhost:3000/todos").then((res)=>{
      setTodos(res.data)
    })
  }
  useEffect(()=>{
    getTodos()
  }, [])

  const deleteTodo = async(id: string) =>{
    await axios.delete(`http://localhost:3000/todos/${id}`);
    setTodos(todos.filter((todos)=> todos.id !==id))
    alert("Chac chan muon xoa?")
  }

const filteredTodos = todos.filter((todo) =>
todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="p-6">
      <Search searchQuery = {searchQuery} setsearchQuery = {setsearchQuery} />
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">STT</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Edit
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Delete
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredTodos.map((item)=>{
              return(
              <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">{item.id} </td>
              <td className="px-4 py-2 border border-gray-300">{item.title}</td>
              <td className="px-4 py-2 border border-gray-300">{item.completed ? "Chua hoan thanh" : "Hoan thanh"}</td>
              <td className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><button>Edit</button></td>
              <td className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"><button onClick={()=> deleteTodo(item.id)}>Delete</button></td>
            </tr>
              )
            })}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
