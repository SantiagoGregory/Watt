import React, { Component } from "react";
import { handleLogin } from "../util/ARUtils";

import "antd/dist/antd.css";
import "./Home.css";


import { Layout, Upload, Icon } from "antd";
const { Sider, Content } = Layout;
const { Dragger } = Upload;

const maxHeight = {
  height: "100vh"
};

export default class Home extends Component {
  handleUpload = () => {
      handleLogin();
  };
  render() {
    return (
      <div>
        <Layout style={maxHeight}>
          <Sider width={"30vw"} className="watt-about">
            <div className="watt">WATT</div>
            <div className="description">
              A decentralized electric vehicle charging station reserver
            </div>
          </Sider>
          <Layout className="content">
            <Dragger
              name="key-upload"
              multiple={false}
              onChange={this.handleUpload}
              customRequest={this.fakeCustomRequest}
              accept="application/json"
              listType="picture-card"
              className="upload-box"
            >
              <p className="ant-upload-drag-icon">
                <Icon type="plus" />
              </p>
              <p className="ant-upload-text" style={{ height: "20px" }}>
                Drag your key file here.
              </p>
            </Dragger>
          </Layout>
        </Layout>
      </div>
    );
  }
}
