import React, { useState, useRef, useEffect } from 'react';

const PhotoUpload = ({file,setFile}) => {
 
  const uploadInputRef = useRef(null);
  const imagePreviewRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    const imagePreview = imagePreviewRef.current;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imgElement = imagePreview.querySelector('img');
        if (imgElement) {
          imgElement.src = e.target.result;
        } else {
          const newImg = document.createElement('img');
          newImg.src = e.target.result;
          newImg.alt = 'Image preview';
          newImg.className = 'max-h-48 rounded-lg mx-auto';
          imagePreview.innerHTML = ''; // Clear the current content
          imagePreview.appendChild(newImg); // Append the new image
        }
        imagePreview.classList.remove('border-dashed', 'border-2', 'border-gray-400');
      };
      reader.readAsDataURL(file);
    } 
  }, [file]);

  return (
    <div
      id="image-preview"
      ref={imagePreviewRef}
      className={`max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer `}
    >
      <input
        id="upload"
        type="file"
        className="hidden"
        accept="image/*"
        ref={uploadInputRef}
        name='photo'
        onChange={handleFileChange}
      />
       {!file && 
       <>
        <label htmlFor="upload" className="cursor-pointer">
       <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-gray-700 mx-auto mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
          Upload picture
        </h5>
        <p className="font-normal text-sm text-gray-400 md:px-6">
          Choose photo size should be less than{' '}
          <b className="text-gray-600">2mb</b>
        </p>
        <p className="font-normal text-sm text-gray-400 md:px-6">
          and should be in <b className="text-gray-600">JPG, PNG, or GIF</b>{' '}
          format.
        </p>
        <span id="filename" className="text-gray-500 bg-gray-200 z-50">
          {file ? file.name : 'No file selected'}
        </span>
      </label>
       </>
       }
     
      {file && (
        <img
          src=""
          alt="Image preview"
          className="max-h-48 rounded-lg mx-auto mt-4"
        />
      )}
    </div>
  );
};

export default PhotoUpload;
