import { useState, useEffect } from "react";
//import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";


const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://mern-app-server-five.vercel.app/books/${id}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAuthor(data.author);
        setPublishYear(data.publishYear);
        setTitle(data.title);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, []);

  const handeEditBook = async () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    try {
      const response = await fetch(`https://mern-app-server-five.vercel.app/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setLoading(false);
      enqueueSnackbar('Book Edited successfully', { variant: 'success' });
      navigate("/");
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Error', { variant: 'error' });
      console.error('Error editing book:', error);
    }
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-sky-500 m-8 text-white"
          onClick={handeEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
