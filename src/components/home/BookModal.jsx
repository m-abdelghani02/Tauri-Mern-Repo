/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg ">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start books-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start books-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
         ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor velit ut felis eleifend, vitae consectetur justo convallis. Praesent ut elit in elit pharetra mattis nec id ipsum. Fusce sed nunc id mauris fringilla interdum. Morbi eget ligula sit amet lorem scelerisque lacinia. Sed ut consequat justo. Duis rhoncus lectus vel metus condimentum, a tristique dolor bibendum. Integer non semper ligula. Vivamus interdum tortor non quam blandit, vel ultrices ligula tempus. Sed ultricies eleifend ipsum, ut interdum enim venenatis vitae. Sed sit amet nisi eu ex varius eleifend. Suspendisse vel bibendum orci. Sed sit.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
