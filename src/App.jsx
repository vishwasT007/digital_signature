import Title from "./components/Title/Title";
import Description from "./components/Description/Description";
import { useState } from "react";
import Input from "./components/Input/Input";

const styleInput = {
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "dotted",
  padding: "4px",
};

const inputContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  top: "40vh",
  gap: "20px",
  padding: "20px",
};
function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }
  return (
    <div>
      <Title title={"Digital Signature"} classes={"main-title p center"} />
      <Title name={"Name"} title={name} classes={"subtitle p"} />
      <Description classes={"pp"} />
      <div style={inputContainerStyle}>
        <Input
          type={"date"}
          value={date}
          style={styleInput}
          onChange={handleDateChange}
        />

        <Input
          type={"text"}
          value={name}
          style={styleInput}
          onChange={handleNameChange}
          placeholder={"Enter your Signature"}
          required
          pattern="^[A-Za-z\s]+$"
        />
      </div>
    </div>
  );
}

export default App;
