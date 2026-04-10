import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router"; // Note: changed to react-router-dom for standard usage
import { motion } from "framer-motion";

const BookCard = ({ book }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full my-6"
    >
      <Link
        to={`/bookDetails/${book.bookId}`}
        className="group card bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      >

        <figure className="p-5 overflow-hidden">
          <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-8 overflow-hidden w-full">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={book.image}
              alt={book.bookName}
              className="h-[230px] object-contain drop-shadow-md"
            />
          </div>
        </figure>


        <div className="card-body p-6 pt-0 flex-grow">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {book.tags.map((tag, ind) => (
              <span
                key={ind}
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-green-600 bg-green-50"
              >
                {tag}
              </span>
            ))}
          </div>


          <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-200 line-clamp-1">
            {book.bookName}
          </h2>
          <p className="text-gray-500 text-sm mb-4 font-medium italic">
            By {book.author}
          </p>


          <div className="mt-auto pt-4 border-t border-dashed border-gray-200 flex justify-between items-center">
            <span className="text-gray-600 font-medium text-sm">
              {book.category}
            </span>
            <div className="flex gap-1.5 items-center font-bold text-gray-700 bg-gray-50 px-3 py-1 rounded-lg">
              {book.rating} <FaRegStar className="text-amber-400" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BookCard;