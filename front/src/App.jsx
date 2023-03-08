import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "./axiosConfig";

function App() {
  const [count, setCount] = useState(1);

  const handleSubmit = async (e) => {
    setCount((count) => count + 1);
    // e.preventDefault();
    try {
      const result = await axios.post("hello/", { count });
      console.log(result.data);
    } catch (error) {
      console.error("There was an error sending the data!", error);
    }
  };
  useEffect(() => {
    // Function to be run every second
    const interval = setInterval(() => {
      handleSubmit();
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {count}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
