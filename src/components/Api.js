import React from "react";
import TableCell from "@material-ui/core/TableCell";

class Api extends React.Component {
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
      <div>
        {this.state.database.map(element => {
          return (
            <>
              <TableCell
                style={{
                  border: "1px solid rgba(224, 224, 224, 1)"
                }}
                align="center"
                justifyContent="space-around"
              >
               
                <div className="Border-circle" > {element.score} </div>
              </TableCell>

              <TableCell
                style={{
                  border: "1px solid rgba(224, 224, 224, 1)"
                }}
                align="center"
                justifyContent="space-around"
              >
                {" "}
                <div className="Border-circle" />
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

            </>
          );
        })}
      </div>
    );
  }
}

// console.log(JSON.stringify(this.state.database))

export default Api;
