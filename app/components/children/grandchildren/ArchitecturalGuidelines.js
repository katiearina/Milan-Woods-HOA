var React = require("react");
var Modal = require("reactstrap").Modal;
var ModalHeader = require("reactstrap").ModalHeader;
var ModalBody = require("reactstrap").ModalBody;
var ModalFooter = require("reactstrap").ModalFooter;

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
            <ModalHeader toggle={this.toggle}>Architectural Guidelines</ModalHeader>
            <ModalBody>
              <iframe className="modal-pdf" src="./assets/documents/ArchitecturalGuidelines-MilanWoods.pdf" alt="Architectural Guidelines - PDF" />
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