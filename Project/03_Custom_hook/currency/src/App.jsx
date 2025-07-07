import React from 'react';
import ConverterForm from './components/ConverterForm';

const App = () => {
  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-hidden">
      {/* 🔥 Video Background */}
      <video
        autoPlay
        muted
        loop
        id="bgVideo"
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
      >
        <source src="/1992-153555258_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 💱 Centered Foreground Content */}
      <div className="flex justify-center items-center min-h-screen w-full z-10">
        {/*  Apply blur only to the card */}
        <div className="bg-black/30 backdrop-blur-md p-5 rounded-2xl">
          <ConverterForm />
        </div>
      </div>
    </div>
  );
};

export default App;
