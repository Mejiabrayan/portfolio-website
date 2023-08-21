'use client'
import React from 'react';
import { motion } from 'framer-motion';

const MatrixCodeAnimation = () => {
  const matrixCode = [];
  const numRows = 30; // Number of rows
  const numColumns = 60; // Number of columns

  for (let row = 0; row < numRows; row++) {
    const rowChars = [];
    for (let col = 0; col < numColumns; col++) {
      const char = String.fromCharCode(Math.floor(Math.random() * 94) + 33); // Random printable ASCII characters
      rowChars.push(char);
    }
    matrixCode.push(rowChars.join(''));
  }

  return (
    <div className="z-10 h-screen flex justify-center items-center bg-white">
      <motion.div
        className="text-green-400 text-lg font-mono"
        initial={{ opacity: 0, translateY: '-100%' }}
        animate={{ opacity: 1, translateY: '0%' }}
        exit={{ opacity: 0, translateY: '100%' }}
        transition={{
          duration: 1.5,
          type: 'tween',
          ease: 'easeInOut',
        }}
      >
        {matrixCode.map((row, index) => (
          <div key={index}>{row}</div>
        ))}
      </motion.div>
    </div>
  );
};

export default MatrixCodeAnimation;
