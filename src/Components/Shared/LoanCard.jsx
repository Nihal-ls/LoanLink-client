import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const LoanCard = ({ loan }) => {
  const { loanTitle, loanImage, interestRate,description, maxLimit,_id } = loan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="mx-auto"
    >
      <div className="card h-full w-96    shadow-lg rounded-2xl overflow-hidden transition-all duration-300">

        <motion.figure
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <img
            src={loanImage}
            alt={loanTitle}
            className="w-full h-56 object-cover"
          />
        </motion.figure>

        <div className="card-body ">

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="card-title text-xl"
          >
            {loanTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className=""
          >
            {description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="font-semibold text-orange-400"
          >
            Max Limit: {maxLimit}$
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="font-semibold text-orange-400"
          >
        Interest Rate: {interestRate}
          </motion.p>

          <div className="card-actions justify-end mt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn rounded-md border-none bg-orange-500 hover:bg-orange-600 text-white"
            >
           <Link to={`/details/${_id}`}>View Details</Link>
            </motion.a>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default LoanCard;
