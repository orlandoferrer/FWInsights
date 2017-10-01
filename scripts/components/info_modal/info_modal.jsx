import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '5%',
    left                  : '5%',
    right                 : '5%',
    bottom                : '5%',
    marginTop             : '5%',
    marginBottom          : '5%',
    marginLeft            : '5%',
    marginRight           : '5%',
    background            : '000',
    overflow              : 'visible',
    borderRadius          : '0',
    border                : 'none',
    width                 : '400px',
    height                : '500px',
    transform             : 'translate(57%, -10%)',
  },
  overlay: {
    backgroundColor       : 'rgba(0, 0, 0, 0.75)',
  }
};

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
              <div>Cup image</div>
            </div>
            <div className="modal-buttons">
              <p>Refilled?</p>
              <button onClick={this.toggleModal}>
                Yes
              </button>
              <button onClick={this.toggleModal}>
                No
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default InfoModal;
