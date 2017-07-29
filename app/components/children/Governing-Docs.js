var React = require("react");

var GoverningDocs = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Governing Docs go here</h1>

        <div className="card-deck">
          <div className="card-block">
            <img className="card-img-top gov-docs" src="./assets/images/ArchitecturalGuidelines-Thumbnail.png" alt="Architectural Guidelines" />
            <div className="card-block">
              <p className="card-text">Architectural Guidelines</p>
            </div>
          </div>

          <div className="card-block">
            <img className="card-img-top gov-docs" src="./assets/images/ArticlesOfIncorporation-Thumbnail.png" alt="Articles of Incorporation" />
            <div className="card-block">
              <p className="card-text">Architectural Guidelines</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = GoverningDocs;