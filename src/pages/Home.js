import React, { Component } from "react";
import "antd/dist/antd.css";
import "./Home.css";
import { Layout, Upload, Icon } from "antd";

const { Sider, Content } = Layout;
const { Dragger } = Upload;

const maxHeight = {
  height: "100vh"
};

export default class Home extends Component {
  handleUpload = () => {};
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
          <Layout>
            <Content className="content">
              <div className="upload-box">
                <Dragger
                  name="key-upload"
                  multiple={false}
                  onChange={this.handleUpload}
                  customRequest={this.fakeCustomRequest}
                  accept="application/json"
                  listType="picture-card"
                  className="avatar-uploader"
                >
                  <p width={"70vw"} className="ant-upload-drag-icon">
                    <Icon type="plus" />
                  </p>
                  <div className="ant-upload-text">
                    Drag your key file here.
                  </div>
                </Dragger>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
