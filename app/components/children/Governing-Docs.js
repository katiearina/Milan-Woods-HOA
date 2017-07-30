var React = require("react");
var ArchitecturalGuidelines = require("./grandchildren/ArchitecturalGuidelines");
var ArticlesOfIncorporation = require("./grandchildren/ArticlesOfIncorporation");
var Bylaws = require("./grandchildren/Bylaws");
var Covenants = require("./grandchildren/Covenants");

var GoverningDocs = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Governing Documents</h2>

        <div className="card-deck">
          <ArchitecturalGuidelines />
          <ArticlesOfIncorporation />
          <Bylaws />
          <Covenants />
        </div>

      </div>
    );
  }
});

module.exports = GoverningDocs;