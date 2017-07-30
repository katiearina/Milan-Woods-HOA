var React = require("react");
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

class ArchitecturalGuidelines extends React.Component{

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
            <img className="card-img-top gov-docs" src="./assets/images/ArchitecturalGuidelines-Thumbnail.png" alt="Architectural Guidelines" />
            <div className="card-block">
              <p className="card-text">Architectural Guidelines</p>
            </div>
          </div>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Architectural Guidelines!
            </ModalBody>
            <ModalFooter>
              <p className="modal-close" onClick={this.toggle}>Close</p>
            </ModalFooter>
          </Modal>

      </div>
    );
  }
};

module.exports = ArchitecturalGuidelines;