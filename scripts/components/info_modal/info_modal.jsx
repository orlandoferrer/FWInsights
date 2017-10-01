import React from 'react';
import Modal from 'react-modal';
import customStyles from './custom_styles';
import { Link } from 'react-router-dom';

const cupImgPaths = [
  './images/cup_image_full.png',
  './images/cup_image_half.png',
  './images/cup_image_low.png',
];


class InfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }


  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {
    return (
      <div>
        <img src="./images/glass.png"
          className="customer-glass"
          onClick={this.toggleModal}/>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.toggleModal}
            style={customStyles}
            contentLabel="Example Modal">
          <div className="info-modal">
            <div className="modal-header">
              <p>Item name</p>
            </div>
            <div className="modal-image">
              <img src={cupImgPaths[Math.floor(Math.random() * cupImgPaths.length)]} />
            </div>
            <div className="modal-buttons">
              <p>Refilled?</p>
              <Link to="/tables">
                <button
                  onClick={this.toggleModal}>
                    Yes
                </button>
              </Link>
              <Link to="/tables">
                <button onClick={this.toggleModal}>
                    No
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default InfoModal;
