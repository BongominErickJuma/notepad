import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Notes from "./components/notes/Notes";
import Todos from "./components/todos/Todos";

const getStoredItems = (item) => {
  const storedItem = localStorage.getItem(item);

  if (storedItem) {
    return JSON.parse(localStorage.getItem(item));
  } else {
    return [];
  }
};

function App() {
  const [showpage, setShowPage] = useState(true);

  const [states, setStates] = useState({
    items: getStoredItems("todo-items"),
    notes: getStoredItems("notes"),
  });

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(states.items));
  }, [states.items]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(states.notes));
  }, [states.notes]);

  const renderPage = () => {
    setShowPage(!showpage);
  };
  return (
    <div>
      {showpage ? (
        <Notes states={states} setStates={setStates} />
      ) : (
        <Todos states={states} setStates={setStates} />
      )}

      <Footer onTap={renderPage} />
    </div>
  );
}

export default App;
