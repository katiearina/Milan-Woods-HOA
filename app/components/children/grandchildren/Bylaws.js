var React = require("react");
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

class Bylaws extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
          <div className="card-block" onClick={this.toggle}>
            <img className="card-img-top gov-docs" src="./assets/images/Bylaws-Thumbnail.png" alt="Bylaws" />
            <div className="card-block">
              <p className="card-text">Bylaws</p>
            </div>
          </div>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Bylaws</ModalHeader>
            <ModalBody>
              <iframe className="modal-pdf" src="./assets/documents/Bylaws-MilanWoods.pdf" alt="Bylaws - PDF" />
            </ModalBody>
            <ModalFooter>
              <p className="modal-close" onClick={this.toggle}>Close</p>
            </ModalFooter>
          </Modal>

      </div>
    );
  }
};

module.exports = Bylaws;