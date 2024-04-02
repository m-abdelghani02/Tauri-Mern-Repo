/* eslint-disable no-unused-vars */
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BackButton from "../components/BackButton";
import { useNavigate,useParams} from "react-router-dom";
import { useSnackbar } from "notistack";


const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();
  const handleDeleteBook= async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://mern-app-server-five.vercel.app/books/${id}`, {
        method: 'DELETE',
        timeout: 30000,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setLoading(false);
      enqueueSnackbar('Book deleted successfully', { variant: 'success' });
      navigate('/');
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Error', { variant: 'error' });
      console.error('Error deleting book:', error);
    }
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className='flex flex-col border-2 items-center border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <h3>Id: {id}</h3>
        <button 
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBook}> Yes, delete it </button>
      </div>
    </div>
  )
}

export default DeleteBook