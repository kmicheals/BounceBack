import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import Button from "../../../abstract/button";

export default class Date extends Component {
  state = {
    search: "",
    rows: [
      ["Date name", "Date Id", "Start", "End", "Action"],
      [
        "Date Title",
        "9868686",
        "15/5/2017",
        "15/12/2017",
        <React.Fragment>
          <i className="fas fa-trash-alt" />
          <Link to="/participants/date/details">
            <i className="fas fa-info-circle" />
          </Link>
        </React.Fragment>
      ],
      [
        "Date Title",
        "9868686",
        "15/5/2017",
        "15/12/2017",
        <React.Fragment>
          <i className="fas fa-trash-alt" />
          <Link to="/participants/date/details">
            <i className="fas fa-info-circle" />
          </Link>
        </React.Fragment>
      ],
      [
        "Date Title",
        "9868686",
        "15/5/2017",
        "15/12/2017",
        <React.Fragment>
          <i className="fas fa-trash-alt" />
          <Link to="/participants/date/details">
            <i className="fas fa-info-circle" />
          </Link>
        </React.Fragment>
      ],
      [
        "Date Title",
        "9868686",
        "15/5/2017",
        "15/12/2017",
        <React.Fragment>
          <i className="fas fa-trash-alt" />
          <Link to="/participants/date/details">
            <i className="fas fa-info-circle" />
          </Link>
        </React.Fragment>
      ]
    ]
  };
  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  goBack = event => {
    this.props.history.push("/participants/date/add");
  };
  render() {
    return (
      <React.Fragment>
        <Header value="View Dates" />
        <Table rows={this.state.rows} />
        <Button value="Edit & save" />
        <Button value="Back" color="red" />
        <Button value="Add Date" onClick={this.goBack} />
        <Footer />
      </React.Fragment>
    );
  }
}