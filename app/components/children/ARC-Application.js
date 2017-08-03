var React = require("react");
var Modal = require("reactstrap").Modal;
var ModalHeader = require("reactstrap").ModalHeader;
var ModalBody = require("reactstrap").ModalBody;
var ModalFooter = require("reactstrap").ModalFooter;

class ArcApplication extends React.Component{

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
        <h2>Architectural Review Committee (ARC) Application</h2>
          <div className="card-block" onClick={this.toggle}>
            <img className="card-img-top arc-app" src="./assets/images/ARCApp-Thumbnail.png" alt="Architectural Review Committee (ARC) Application" />
            <div className="card-block">
              <p className="card-text">Architectural Review Application</p>
            </div>
          </div>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>ARC Application</ModalHeader>
            <ModalBody>
              <iframe className="modal-pdf" src="./assets/documents/ARCApplication-MilanWoods.pdf" alt="Architectural Guidelines - PDF" />
            </ModalBody>
            <ModalFooter>
              <p className="modal-close" onClick={this.toggle}>Close</p>
            </ModalFooter>
          </Modal>

      </div>
    );
  }
};

module.exports = ArcApplication;