var React = require("react");
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

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
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Articles of Incorporation!
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