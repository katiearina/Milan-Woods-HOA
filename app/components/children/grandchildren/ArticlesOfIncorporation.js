var React = require("react");
var Modal = require("reactstrap").Modal;
var ModalHeader = require("reactstrap").ModalHeader;
var ModalBody = require("reactstrap").ModalBody;
var ModalFooter = require("reactstrap").ModalFooter;

class ArticlesOfIncorporation extends React.Component{

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
            <img className="card-img-top gov-docs" src="./assets/images/ArticlesOfIncorporation-Thumbnail.png" alt="Articles of Incorporation" />
            <div className="card-block">
              <p className="card-text">Articles of Incorporation</p>
            </div>
          </div>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Articles of Incorporation</ModalHeader>
            <ModalBody>
              <iframe className="modal-pdf" src="./assets/documents/ArticlesOfIncorporation-MilanWoods.pdf" alt="Articles of Incorporation - PDF" />
            </ModalBody>
            <ModalFooter>
              <p className="modal-close" onClick={this.toggle}>Close</p>
            </ModalFooter>
          </Modal>

      </div>
    );
  }
};

module.exports = ArticlesOfIncorporation;