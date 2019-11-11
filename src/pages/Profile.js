import React, { Component } from "react";
import { logout } from "../util/ARUtils";
import { Button, Modal, Divider } from "antd";

import "./Profile.css";

export default class Profile extends Component {
  state = {
    // TODO add Arweave fetch
    name: this.props.name,
    addModal: false,
    vehicles: []
  };

  handleLogout = () => {
    logout();
  };

  handleAddVehicle = () => {
    this.setState({ addModal: true });
  };

  handleOk = () => {
    this.setState({ addModal: false });
  };

  render() {
    return (
      <div>
        <h1 className="user-name">{this.state.name}</h1>
        <div className="buttons">
          <Button type="primary" onClick={this.handleAddVehicle}>
            Add Vehicle
          </Button>
          <Divider />
          <Button type="danger" onClick={this.handleLogout}>
            Logout
          </Button>
        </div>

        <Modal
          title="Add Vehicle"
          visible={this.state.addModal}
          onOk={this.handleOk}
        >
          <Button type="primary">beep</Button>
        </Modal>
      </div>
    );
  }
}
