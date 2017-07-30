var React = require("react");
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class GoverningDocs extends React.Component{

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
        <h2>Governing Documents</h2>

        <div className="card-deck">
          <div className="card-block" onClick={this.toggle}>
            <img className="card-img-top gov-docs" src="./assets/images/ArchitecturalGuidelines-Thumbnail.png" alt="Architectural Guidelines" />
            <div className="card-block">
              <p className="card-text">Architectural Guidelines</p>
            </div>
          </div>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

          <div className="card-block">
            <img className="card-img-top gov-docs" src="./assets/images/ArticlesOfIncorporation-Thumbnail.png" alt="Articles of Incorporation" />
            <div className="card-block">
              <p className="card-text">Articles of Incorporation</p>
            </div>
          </div>

          <div className="card-block">
            <img className="card-img-top gov-docs" src="./assets/images/Bylaws-Thumbnail.png" alt="Bylaws" />
            <div className="card-block">
              <p className="card-text">Bylaws</p>
            </div>
          </div>

          <div className="card-block">
            <img className="card-img-top gov-docs" src="./assets/images/Covenants-Thumbnail.png" alt="Covenants" />
            <div className="card-block">
              <p className="card-text">Covenants</p>
            </div>
          </div>

        </div>

      </div>
    );
  }
};

module.exports = GoverningDocs;