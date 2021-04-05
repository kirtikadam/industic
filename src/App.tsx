import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AppState } from "./store/rootStore";
import { ThemeProvider } from "@material-ui/core/styles";
import { incrementCount, decrementCount } from "./action/incrementAction";
import User from "./component/User";
// import HomePage from "./component/HomePage";
import Header from "./component/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Footer from "./shared/Footer";
import OurServices from "./component/OurServices";
import LandingPage from "./component/LandingPage";
import About from "./component/About";
import Contact from "./component/OurServices"
import Products from "./component/Products";
import Clients from "./component/Clients";

interface AppProps {
  increment: () => void;
  decrement: () => void;
}

const mapStateToProps = (state: AppState) => ({
  count: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
});

class App extends Component<AppProps, AppState> {
  render(): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Router>
          <Switch>
            <Route path="/user" component={User} />
            <Route path="/header" component={Header} />
            <Route path='/contact' component={Contact} />
            {/* <Route path="/" component={() => <HomePage {...this.props} />} /> */}
            <Route exact path="/products" component={Products} />
          </Switch>
        </Router>
        <LandingPage />
        <About />
        {/* 
        //ToDo
        <RequestAQuote /> */}
        <OurServices></OurServices>
        <Clients></Clients>
        <Footer></Footer>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
