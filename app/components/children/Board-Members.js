var React = require("react");
var Table = require("reactstrap").Table;

var BoardMembers = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Current Board Members</h2>
          <Table striped id="board-member-table">
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
                <td className="position">President</td>
                <td>Steve McNulty</td>
                <td>1307 Logan Street</td>
                <td>November 2018</td>
              </tr>
              <tr>
                <td className="position">Vice President</td>
                <td>Katie Geckle</td>
                <td>6 Willis Court</td>
                <td>November 2018</td>
              </tr>
              <tr>
                <td className="position">Secretary</td>
                <td>Cathy Guldner</td>
                <td>1316 Logan Street</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td className="position">Treasurer</td>
                <td>Charisse Gilbreath</td>
                <td>1429 Milan Street</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td className="position">Historian</td>
                <td>Rob Corns</td>
                <td>1307 Logan Street</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td className="position">Member</td>
                <td>Fleechia Holloway</td>
                <td>1001 Clifford Drive</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td className="position">Member</td>
                <td>Lisa Weaver</td>
                <td>1315 Logan Street</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td className="position">Member</td>
                <td>Toni Enoch</td>
                <td>1417 Milan Street</td>
                <td>&mdash;</td>
              </tr>               
            </tbody>
          </Table>
      </div>
    );
  }
});

module.exports = BoardMembers;