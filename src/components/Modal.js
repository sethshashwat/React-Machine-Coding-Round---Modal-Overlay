import React from 'react'

export default function Modal({setShowModal, setOfferAccepted}) {

    const handleClose = () => {
        setShowModal(false);
    }

    const handleAcceptOffer = () => {
        setOfferAccepted(true);
    }

    const handleOutsideClick = (e) => {
        if(e.target.className === "modal") {
            handleClose();
        }
    }

    return (
        <div className='modal' onClick={handleOutsideClick}>
            <div class="modal-content">
                <button className="close-button" onClick={handleClose}>X</button>
                <div class="content">
                    Click the below button to accept our amazing offer!
                </div>
                <button class="accept-button" onClick={handleAcceptOffer}>Accept Offer</button>
            </div>
        </div>
    )
}
