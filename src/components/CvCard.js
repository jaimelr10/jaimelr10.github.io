import React, { useState } from 'react';

function Card({ title, content, modalContent }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <button className='button' onClick={() => setShowModal(true)}>More info</button>
      {showModal && <Modal onClose={handleCloseModal} modalContent={modalContent} />}
    </div>
  );
}

function Modal({ onClose, modalContent }) {
  return (
    <div className="modal">
      <div className="modal-content">
            {modalContent}
        <button className="button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Card;