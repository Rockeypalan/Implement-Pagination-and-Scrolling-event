import "./App.css";
import Pagination from "./Pagination";
import InfiniteScroll from "./InfiniteScroll";
import { useState } from "react";

function App() {
  const [view, setView] = useState("pagination");

  return (
    <div>
      <h1>Welcome to Random Users</h1>

      <div className="nav">
        <button onClick={() => setView("pagination")}>Pagination</button>
        <button onClick={() => setView("infiniteScroll")}>
          Infinite Scroll
        </button>
      </div>
      {view === "pagination" ? <Pagination /> : <InfiniteScroll />}
    </div>
  );
}

export default App;
