import {useState, useEffect} from 'react';
import "./App.css";

function App() {
    // Get color from local storage or default to olive
    const [color, setColor] = useState(() => localStorage.getItem('bgColor') || 'olive');

    // Save selected color to local storage
    useEffect(() => {
      localStorage.setItem('bgColor', color);
    }, [color]);
  
    // Random color generator
    const generateRandomColor = () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setColor(randomColor);
    };
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-4xl font-bold mb-6 text-black  rounded-full px-6 py-6 shadow-md drop-shadow-lg bg-white">
        Background Color Changer
      </h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4 mb-10">
        <div className="flex flex-wrap justify-center gap-4 shadow-2xl bg-white px-6 py-4 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-110 shadow-md"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-110 shadow-md"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-110 shadow-md"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-110 shadow-md"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-6 py-2 rounded-full text-black font-semibold transition-all duration-300 transform hover:scale-110 shadow-md"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-110 shadow-md"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-110 shadow-md"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-6 py-2 rounded-full text-black font-semibold transition-all duration-300 transform hover:scale-110 shadow-md"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-6 py-2 rounded-full text-black font-semibold transition-all duration-300 transform hover:scale-110 shadow-md"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={generateRandomColor}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-110 shadow-md bg-gradient-to-r from-purple-400 to-blue-600"
          >
            Random Color
          </button>
        </div>
      </div>
      <div className="mt-8 p-4 bg-white rounded-lg shadow-lg text-xl font-semibold">
        Current Color: <span style={{ color }}>{color}</span>
      </div>
      <footer className="fixed bottom-0 w-full text-center p-4 bg-gray-800 text-white text-lg mt-10">
        © 2025 Tarun Pratap Singh
      </footer>
    </div>
  );
}

export default App;
