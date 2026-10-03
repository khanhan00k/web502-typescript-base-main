import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Header from "./component/Header";
import ListPage from "./pages/ListPage";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
           
          </Link>
        <Header/>
         
         
        </div>
      </nav>
      <ListPage/>
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Thêm Sinh Viên</h1>
      </div>
      <AddPage/>

      <Toaster />
    </>
  );
}

export default App;
