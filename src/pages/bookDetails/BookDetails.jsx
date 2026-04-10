import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";
import { motion } from "framer-motion";

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId)
  );

  if (!expectedBook) return <div className="text-center py-20">Book not found</div>;

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkAsRead, handleWishList } = useContext(BookContext);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="container mx-auto my-12 px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        <motion.figure 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full aspect-square flex items-center justify-center bg-gray-50 rounded-3xl p-12 overflow-hidden shadow-inner"
        >
          <img 
            src={image} 
            alt={bookName} 
            className="h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
          />
        </motion.figure>

   
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col h-full"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            {bookName}
          </h1>
          <p className="text-xl font-medium text-gray-600 mb-6 italic">By: {author}</p>
          
          <div className="py-3 border-y border-gray-100 mb-4">
            <span className="px-4 py-1 bg-green-50 text-green-700 rounded-full text-sm font-bold uppercase tracking-widest">
              {category}
            </span>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-gray-800 mb-2">Review</h3>
            <p className="text-gray-600 leading-relaxed text-justify italic">
              "{review}"
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="font-bold text-gray-800">Tags:</span>
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

   
          <div className="grid grid-cols-1 gap-y-4 border-t pt-8 mb-8 max-w-md">
            <div className="flex justify-between">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-bold text-gray-900">{totalPages}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Publisher:</span>
              <span className="font-bold text-gray-900">{publisher}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-bold text-gray-900">{yearOfPublishing}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Rating:</span>
              <span className="font-bold text-gray-900 text-amber-500 underline underline-offset-4 decoration-amber-200">
                ★ {rating}
              </span>
            </div>
          </div>

        
          <div className="flex flex-wrap items-center gap-4 mt-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-gray-200 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark as Read
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-100 hover:bg-cyan-600 transition-all duration-300"
              onClick={() => handleWishList(expectedBook)}
            >
              Add to Wishlist
            </motion.button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default BookDetails;