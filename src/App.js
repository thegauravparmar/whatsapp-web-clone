import React, { useEffect } from "react";
import { connect } from "react-redux";
import SplashScreen from "./pages/SplashScreen";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/main.css";
import Messenger from "./pages/Messenger";

// Defining the App component
function App(props) {
  // Destructuring the loaded state and setState function from props
  const { loaded, setState } = props;

  // Using useEffect hook to set the loaded state to true after 1 second
  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 1000);
  }, []);

  // Rendering either the SplashScreen or Messenger component depending on the loaded state
  return (
    <BrowserRouter>{loaded ? <Messenger /> : <SplashScreen />}</BrowserRouter>
  );
}

// Mapping the redux store's state to the component's props
const mapStateToProps = (state) => {
  return {
    loaded: state.ReducerApp.loaded,
  };
};

// Mapping the action creators to the component's props
const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) =>
      dispatch({ type: "APP_STATE", state: { loaded: loaded } }),
  };
};

// Exporting the App component after connecting it to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
