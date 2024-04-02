import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books/create" element={<CreateBook/>} />
        <Route path="/books/details/:id" element={<ShowBook/>} />
        <Route path="/books/edit/:id" element={<EditBook/>} />
        <Route path="/books/delete/:id" element={<DeleteBook/>} />
    </Routes>
  );
};

export default App;

/*import React from 'react'

const App = () => {
  return (
    <div className='bg-red-400 text-white'>App</div>
  )
}

export default App*/
