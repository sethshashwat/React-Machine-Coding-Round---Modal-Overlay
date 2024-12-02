import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import OfferAccepted from './components/OfferAccepted';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  const handleShowOffer = () => {
    setShowModal(true);
  }

  return (
    <div className="App">
      <div className='show-offer'>
        {
          !showModal && <button className='offer-button' onClick={handleShowOffer}>Show Offer</button>
        }
         {
          showModal && !offerAccepted && <Modal setShowModal={setShowModal} setOfferAccepted={setOfferAccepted}/>
         } 
         {
          offerAccepted && <OfferAccepted />
         }
      </div>
    </div>
  );
}

export default App;
