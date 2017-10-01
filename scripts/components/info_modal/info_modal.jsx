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
    // position              : 'absolute',
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
        <button onClick={this.toggleModal}></button>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.toggleModal}
            style={customStyles}
            contentLabel="Example Modal">
          <p>Hello, modal!</p>
        </Modal>
      </div>
    );
  }
}

export default InfoModal;
