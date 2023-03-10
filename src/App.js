import React, { Component } from "react";
import Controller from "./containers/controller";
import { Typography } from "antd";

import "./App.css";
const { Title } = Typography;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title level={3} style={{ textAlign: "center" }}>
          Stone Paper Scissor
        </Title>
        <Controller />
      </div>
    );
  }
}

export default App;
