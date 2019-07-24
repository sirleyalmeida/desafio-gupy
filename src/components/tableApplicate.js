import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import TableRow from "@material-ui/core/TableRow";

class TableApplicate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database: [],
      id: "",
      isActive: "",
      picture: "",
      birthDate: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      createdAt: "",
      score: 0,
      tags: []
    };
  }

  componentDidMount() {
    fetch("http://www.mocky.io/v2/5d34c0b62e0000953fa6b7f1")
      .then(resp => resp.json())
      .then(resp => this.setState({ database: resp }));
  }

  render() {
    return (
      <>
        {this.state.database.map(element => {
          return (
            <TableRow
              hover
              onClick={this.onClick}
              role="checkbox"
              tabIndex={-1}
              key={this.props.rowName}
              selected={this.props.isItemSelected}
            >
              <TableCell
                style={{
                  border: "1px solid rgba(224, 224, 224, 1)"
                }}
                align="center"
                justifyContent="space-around"
              >
                <Typography variant="p" component="h2">
                  <div className="Border-circle"> {element.score} </div>
                </Typography>
              </TableCell>

              <TableCell>

                <Typography variant="p" component="h2">
                  {element.name}
                </Typography>

                <Typography variant="p" component="h2">
                  {element.birthDate}
                </Typography>
                <div>
                  <img className="Border-circle-pic" src={element.picture}></img>

                </div>
              </TableCell>
              <TableCell
                style={{
                  border: "1px solid rgba(224, 224, 224, 1)"
                }}
                align="center"
                justifyContent="space-around"
              >
                <i class="material-icons">email</i>
                <i class="material-icons"> phone </i>
                <i class="material-icons"> place </i>
              </TableCell>
              <TableCell
                style={{
                  border: "1px solid rgba(224, 224, 224, 1)"
                }}
                align="center"
                justifyContent="space-around"
              >
                {element.createdAt}
              </TableCell>

              <TableCell
                style={{
                  border: "1px solid rgba(224, 224, 224, 1)"
                }}
                align="left"
              >
                {element.tags.map(item => {
                  return <Chip className="Tag" label={item} />;
                })}
              </TableCell>
            </TableRow>
          );
        })}
      </>

    );
  }
}

export default TableApplicate;