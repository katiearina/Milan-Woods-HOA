var React = require("react");
var Table = require("reactstrap").Table;

var BoardMembers = React.createClass({
  render: function() {
    return (
      <Table id="board-member-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Address</th>
            <th>Term End</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>President</td>
            <td>Steve McNulty</td>
            <td>Logan Street</td>
            <td>Not allowed</td>
          </tr>
          <tr>
            <td>Vice President</td>
            <td>Katie Geckle</td>
            <td>6 Willis Court</td>
            <td>November 2018</td>
          </tr>
          <tr>
            <td>Secretary</td>
            <td>Cathy Guldner</td>
            <td>ADD HERE</td>
            <td>ADD HERE</td>
          </tr>
          <tr>
            <td>Treasurer</td>
            <td>Charisse</td>
            <td>Milan Street</td>
            <td>ADD HERE</td>
          </tr>
          <tr>
            <td>Historian</td>
            <td>Rob Corns</td>
            <td>Logan Street</td>
            <td>Indefinite</td>
          </tr>
          <tr>
            <td>Member</td>
            <td>Fleechia</td>
            <td>Clifford Drive</td>
            <td>ADD HERE</td>
          </tr>
          <tr>
            <td>Member</td>
            <td>Lisa Weaver</td>
            <td>Logan Street</td>
            <td>ADD HERE</td>
          </tr>
          <tr>
            <td>Member</td>
            <td>Toni Enoch</td>
            <td>Milan Street</td>
            <td>ADD HERE</td>
          </tr>               
        </tbody>
      </Table>
    );
  }
});

module.exports = BoardMembers;