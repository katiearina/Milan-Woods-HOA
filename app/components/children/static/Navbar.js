var React = require("react");
var Link = require("react-router").Link;

var Navbar = React.createClass({
  render: function() {
    return (

      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="#">Home</a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">

          <ul className="navbar-nav">

            <li className="nav-item active">
              <Link to="/ArcApp" className="nav-link">ARC Application<span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
              <Link to="/BoardMembers" className="nav-link">Current Board Members</Link>
            </li>

            <li className="nav-item">
              <Link to="/Collection" className="nav-link">Collection Schedule</Link>
            </li>

            <li className="nav-item">
              <Link to="/GoverningDocs" className="nav-link">Governing Documents</Link>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pet Directory
                </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/PetDirectory" className="dropdown-item">View Directory</Link>
                <Link to="/PetForm" className="dropdown-item">Add Pet to Directory</Link>
              </div>
            </li>

          </ul>

        </div>
      </nav>
      
    );
  }
});

module.exports = Navbar;