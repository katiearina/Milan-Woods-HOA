var React = require("react");
var Modal = require("reactstrap").Modal;
var ModalHeader = require("reactstrap").ModalHeader;
var ModalBody = require("reactstrap").ModalBody;
var ModalFooter = require("reactstrap").ModalFooter;

class MapPin extends React.Component{

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

  getInitialState(){
    return {mapUrl: ""};
  }

  componentWillMount() {
    this.setState({mapUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyD-spK8c4Z45hLR1FacjqWC-bbCNUX_8Xw&zoom=15&center=36.0104287,-78.8552636&q=Milan+Woods,Durham+NC'})
  }

  render() {
    return (
      <div>
        <div className="sidebar-links">
          <span className="hover-text">Show on Map</span>
            <i id="map-pin" className="material-icons" onClick={this.toggle}>place</i>
        </div>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Google Map - Milan Woods</ModalHeader>
            <ModalBody>
              <iframe id="google-map" src={this.state.mapUrl}/>
            </ModalBody>
            <ModalFooter>
              <p className="modal-close" onClick={this.toggle}>Close</p>
            </ModalFooter>
          </Modal>

      </div>
    );
  }
};

module.exports = MapPin;
