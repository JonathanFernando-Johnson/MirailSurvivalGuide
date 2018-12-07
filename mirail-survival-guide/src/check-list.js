import React, { Component } from "react";
import { Checkbox } from "office-ui-fabric-react/lib-commonjs/Checkbox";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      velo: this.props.velo,
      gamelle: this.props.gamelle,
      carte: this.props.carte
    };
  }
  checkVelo() {
    var pane = [""];
    if (this.state.velo) {
      pane.push(
        <div>
          <Checkbox label="vélo?" onChange={this.handleCheck} />
        </div>
      );
    }
    if (this.state.gamelle) {
      pane.push(<Checkbox label="gamelle?" onChange={this.handleCheck} />);
    }
    if (this.state.carte) {
      pane.push(
        <div>
          <Checkbox label="carte d'étudiant?" onChange={this.handleCheck} />
        </div>
      );
    }
    return pane;
  }

  render() {
    const liste = this.checkVelo();
    return <div className="check-list">Avez-vous pris votre :{liste}</div>;
  }
}

export default CheckList;
