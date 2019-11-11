import React, { Component } from "react";
import { logout } from "../util/ARUtils";
import { Button, Modal, Divider, Select, Table } from "antd";
import "./Profile.css";
const uuidv4 = require("uuid/v4");

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.makes = ["Mahindra Electric", "Renault", "Hyundai", "Honda", "Ather"];
    this.models = ["Kona", "E2", "Kwid"];

    this.columns = [
      {
        title: "Type",
        dataIndex: "type",
        key: "type"
      },
      {
        title: "Make",
        dataIndex: "make",
        key: "make"
      },
      {
        title: "Model",
        dataIndex: "model",
        key: "model"
      }
    ];

    this.tableProps = {
      pagination: { position: "none", bordered: true },
      locale: { emptyText: "Click the \"Add Vehicle\" button to add a new vehicle" }
    };
  }

  state = {
    // TODO add Arweave fetch
    name: this.props.name,
    modalVisible: false,
    vehicles: [],
    currentVehicle: {
      type: "Car",
      make: "",
      model: ""
    },
    okDisabled: true
  };

  handleLogout = () => {
    logout();
  };

  handleAddVehicle = () => {
    this.setState({
      modalVisible: true,
      currentVehicle: {
        type: "Car",
        make: "",
        model: ""
      },
      okDisabled: true
    });
  };

  handleOk = () => {
    let newVehicles = this.state.vehicles.concat(this.state.currentVehicle);
    this.setState({ vehicles: newVehicles, modalVisible: false });
  };

  toggleTwoWheeler = () => {
    this.setState({
      currentVehicle: {
        type: this.state.currentVehicle.type === "Car" ? "Bike" : "Car"
      }
    });
  };

  handleSelectChange = value => {
    if (this.makes.includes(value)) {
      this.handleMakeChange(value);
    } else {
      this.handleModelChange(value);
    }
  };

  handleMakeChange = value => {
    console.log(this.models.includes(this.state.currentVehicle.model));
    this.setState({
      currentVehicle: {
        type: this.state.currentVehicle.type,
        make: value,
        model: this.state.currentVehicle.model
      },
      okDisabled: !this.models.includes(this.state.currentVehicle.model)
    });
  };

  handleModelChange = value => {
    console.log(this.makes.includes(this.state.currentVehicle.make));
    this.setState({
      currentVehicle: {
        type: this.state.currentVehicle.type,
        make: this.state.currentVehicle.make,
        model: value
      },
      okDisabled: !this.makes.includes(this.state.currentVehicle.make)
    });
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false,
      currentVehicle: {
        twoWheeler: false,
        make: "",
        model: ""
      },
      okDisabled: true
    });
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

          <Table
            {...this.tableProps}
            dataSource={this.state.vehicles}
            columns={this.columns}
          />

          <Button type="danger" onClick={this.handleLogout}>
            Logout
          </Button>
        </div>

        <Modal
          title="Add Vehicle"
          visible={this.state.modalVisible}
          onOk={this.handleOk}
          okButtonProps={{ disabled: this.state.okDisabled }}
        >
          <Button.Group size="large">
            <Button
              onClick={this.toggleTwoWheeler}
              type={
                this.state.currentVehicle.type === "Bike"
                  ? "primary"
                  : "secondary"
              }
            >
              Bike
            </Button>
            <Button
              onClick={this.toggleTwoWheeler}
              type={
                this.state.currentVehicle.type === "Car"
                  ? "primary"
                  : "secondary"
              }
            >
              Car
            </Button>
          </Button.Group>
          <br />
          <br />
          <Select
            defaultValue="Make"
            size="large"
            onChange={this.handleSelectChange}
          >
            {this.makes.map(e => (
              <Select.Option value={e} key={uuidv4()}>
                {e}
              </Select.Option>
            ))}
          </Select>

          <br />
          <br />
          <Select
            defaultValue="Model"
            size="large"
            onChange={this.handleSelectChange}
          >
            {this.models.map(e => (
              <Select.Option value={e} key={uuidv4()}>
                {e}
              </Select.Option>
            ))}
          </Select>
        </Modal>
      </div>
    );
  }
}
