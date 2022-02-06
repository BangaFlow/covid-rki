import React from "react";
import { Content, Footer, Header } from "../../components/Layout";
import { LAST_X_DAYS } from "../../constants";
import Dashboard from "../Dashboard/Dashboard";

const App: React.FC = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <Header>
        <h2 style={{ fontFamily: "'Comfortaa', cursive" }}>
          Covid-19 Local Updates - München
        </h2>
        <h4 style={{ color: '#52525b' }}>Data for the last {LAST_X_DAYS} days</h4>
      </Header>
      <Content>
        <Dashboard />
      </Content>
      <Footer>Cliniserve ©{new Date().getFullYear()}</Footer>
    </div>
  );
};

export default App;
