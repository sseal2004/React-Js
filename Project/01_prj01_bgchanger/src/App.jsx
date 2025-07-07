import { useState } from "react";

// https://v3.tailwindcss.com/docs/guides/vite
function App() {
  const [color, setColor] = useState("olive");
  //m-2
  let Yellow =()=>{
    setColor("yellow")
  }

  return (
    <div
      className=" w-screen h-screen duration-200 flex justify-center items-end pb-10"
      style={{ backgroundColor: color }}
    >
      
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl">
        
      <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red" }}>
        Red
      </button>
      <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green" }}>
        Green
      </button>
      <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Blue" }}>
        Blue
      </button>
       <button onClick={Yellow} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Yellow" }}>
        Yellow
      </button>
     
      <button onClick={()=>setColor("Purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Purple" }}>
        Purple
      </button>
       <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Orange" }}>
        Orange
      </button>
       <button onClick={()=>setColor("teal")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "teal" }}>
        Teal
      </button>
       <button onClick={()=>setColor("fuchsia")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "fuchsia" }}>
        Fuchsia
      </button>
       <button onClick={()=>setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "Pink" }}>
        Pink
      </button>
       <button onClick={()=>setColor("olive")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "olive" }}>
        Olive
      </button>
      <button onClick={()=>setColor("black")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black" }}>
        Black
      </button>
      <button onClick={()=>setColor("Lavender")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "lavender" }}>
        Lavender
      </button>
      <button onClick={()=>setColor("gray")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "gray" }}>
        Gray
      </button>
     
     
     
     


      </div>
      
    </div>
  );
}

export default App;

