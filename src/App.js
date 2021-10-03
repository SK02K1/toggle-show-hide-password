import { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { ToggleBtn } from "./components/ToggleBtn";
import "./styles.css";

export default function App() {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const toggleBtnClickHandler = (visibilityState) => {
    setPasswordVisibility(visibilityState);
  };
  return (
    <div className="App">
      <Header title="Toggle show-hide password" />
      <Input passwordVisible={isPasswordVisible} />
      <ToggleBtn
        passwordVisible={isPasswordVisible}
        handler={toggleBtnClickHandler}
      />
    </div>
  );
}
