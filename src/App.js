import './App.css';
import React, {useState} from "react";
import LoginForm from "./Components/LoginFrom";
import NavBar from "./Components/NavBar";

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }

  return (
    <div className="App">
      <NavBar handleLoginClick={handleLoginClick} />
      <LoginForm isShowLogin={isShowLogin} />
    </div>
  );
}

export default App;
