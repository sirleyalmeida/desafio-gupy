import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import Grid from '@material-ui/core/Grid';

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

  dateRegistered = (createdAt) => {
    let date = new Date(createdAt)
    return `${date.getDate()}|${date.getMonth() + 1}|${date.getFullYear()}`
  }

  ageApplicant = (birthDate) => {
    let dateBday = new Date(birthDate),
      yearBday = dateBday.getFullYear(),
      monthBday = dateBday.getMonth() + 1,
      dayBday = dateBday.getDate()

    let dateNow = new Date(),
      yearNow = dateNow.getFullYear(),
      monthNow = dateNow.getMonth() + 1,
      dayNow = dateNow.getDate(),

      ageNow = yearNow - yearBday

    if ((monthNow < monthBday) && (monthNow === monthBday) && (dayNow < dayBday)) {
      ageNow--;
    }
    return `${ageNow} anos`
  }

  countryApplicant = (address) => {
    let addressApplicant = address;
    let cityAndCountry = addressApplicant.substring(addressApplicant.indexOf(",") + 1);
    let onlyCountry = cityAndCountry.substring(cityAndCountry.indexOf(",") + 1);
    return onlyCountry
  }

  render() {
    return (
      <>
        {this.state.database.map((element, index) => {
          return (
            <TableRow
              hover
              onClick={this.onClick}
              role="checkbox"
              tabIndex={-1}
              key={this.props.rowName}
              selected={this.props.isItemSelected}>
              <TableCell
                key={index}
                style={{ border: "1px solid rgba(224, 224, 224, 1)", fontFamily: "'Lato', sans- serif" }}
                align="center"
                justifyContent="space-evenly">
                <Typography variant="p" component="subtitle2"
                  className="Border-circle">{element.score}</Typography>
              </TableCell>
              <TableCell>
                <Grid container
                  key={index}
                  alignContent="flex-start">
                  <div>
                    <img className="Border-circle-pic" src={element.picture}></img>
                  </div>
                  <div style={{ paddingLeft: 15 }}>
                    <Typography style={{ color: "#424242", fontFamily: "'Lato', sans- serif" }}
                      variant="p"
                      component="h4"
                    >{element.name}</Typography>
                    <Typography style={{ color: "#424242", fontSize: 12, fontFamily: "'Lato', sans- serif" }}
                      variant="p"
                      component="subtitle2"
                    >{this.ageApplicant(element.birthDate)}, {this.countryApplicant(element.address)}</Typography>
                  </div>
                </Grid>
              </TableCell>
              <TableCell
                key={index}
                style={{ border: "1px solid rgba(224, 224, 224, 1)", fontFamily: "'Lato', sans- serif" }}
                align="center"
                justifyContent="space-around">
                <i class="material-icons icons-table">email</i>
                <i class="material-icons icons-table">phone</i>
                <i class="material-icons icons-table">place</i>
              </TableCell>
              <TableCell
                key={index}
                style={{
                  border: "1px solid rgba(224, 224, 224, 1)",
                  fontWeight: "bold",
                  fontSize: 14,
                  color: "#424242",
                  fontFamily: "'Lato', sans- serif"
                }}
                align="center"
                justifyContent="space-around"
              >{this.dateRegistered(element.createdAt)}</TableCell>
              <TableCell
                style={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                align="left">
                {element.tags.map((item, index) => {
                  return <Chip
                    key={index}
                    style={{
                      color: "white",
                      backgroundColor: "#26a69a",
                      borderRadius: 5,
                      margin: 4,
                      fontSize: 12,
                      padding: 1,
                      fontFamily: "'Lato', sans- serif"
                    }}
                    className="tags" label={item} />
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