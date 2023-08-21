import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'flex' : 'hidden'} justify-center items-center`}>
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className=" p-1 rounded-sm shadow-lg z-10 w-1/2 h-3/4">
        {children}
      
        <div className=" bg-inherit py-6 flex flex-col justify-center sm:py-12 h-full">
  <div className="py-3 px-3 sm:max-w-3/4 ">
    <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
      <div className="px-12 py-5">
        <h2 className="text-gray-800 text-3xl font-semibold">Send a Message!</h2>
      </div>
      <div className="bg-gray-200 w-full h-full flex flex-col items-center">
        
        <div className="w-3/4 flex flex-col">
          <textarea rows="3" className=" mt-5 p-4 text-gray-500 rounded-xl resize-none" placeholder='Leave a message...'></textarea>
          <button className="py-3 my-8 text-lg bg-gradient-to-r bg-green-700 rounded-xl text-white">Send</button>
        </div>
      </div>
      <button onClick={onClose}  className="h-20 flex items-center justify-center bg-red-500">
        <div className="text-white">Maybe later</div>
      </button>
    </div>

   
  </div>
</div>
      </div>
    </div>
  );
};

export default Modal;
