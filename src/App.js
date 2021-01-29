import logo from "./logo.svg";
import "./App.css";
import { Button, DatePicker, Row } from "antd";
import "antd/dist/antd.css";
import Layout from "./component/Layout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi world</p>

        <Row>
          <Button type="primary">Button</Button>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <DatePicker />
        </Row>

        <Row>
          <Layout />
        </Row>
      </header>
    </div>
  );
}

export default App;
