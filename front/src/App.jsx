import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "./axiosConfig";

function App() {
  const [count, setCount] = useState(1);

  const handleSubmit = async (e) => {
    setCount((count) => count + 1);
    e.preventDefault();
    try {
      const result = await axios.post("hello/", { count });
      console.log(result.data.message)
    } catch (error) {
      console.error("There was an error sending the data!", error);
    }
  };

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
