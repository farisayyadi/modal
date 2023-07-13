import { useState } from "react";
import "./App.css";
import { Modal } from "./components/modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showingModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = (e) => {
    // e.stopPropagation();
    if (e.target.classList.contains("closeModal")) {
      setShowModal(false);
    }
  };

  return (
    <div className="App">
      <h1>Let's create Modal</h1>
      <figure>
        <img src="/modal.png" alt="modal" />
      </figure>
      <button className="opening-modal" onClick={showingModal}>
        OPEN MODAL
      </button>

      {showModal && <Modal onCloseModal={handleCloseModal} />}
    </div>
  );
}

export default App;
