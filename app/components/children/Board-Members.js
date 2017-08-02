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
            <td>1307 Logan Street</td>
            <td>November 2018</td>
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
            <td>1316 Logan Street</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td>Treasurer</td>
            <td>Charisse Gilbreath</td>
            <td>1429 Milan Street</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td>Historian</td>
            <td>Rob Corns</td>
            <td>1307 Logan Street</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td>Member</td>
            <td>Fleechia Holloway</td>
            <td>1001 Clifford Drive</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td>Member</td>
            <td>Lisa Weaver</td>
            <td>1315 Logan Street</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td>Member</td>
            <td>Toni Enoch</td>
            <td>1417 Milan Street</td>
            <td>&mdash;</td>
          </tr>               
        </tbody>
      </Table>
    );
  }
});

module.exports = BoardMembers;