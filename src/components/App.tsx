import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/Theme";
import Header from "./ui/header/Header";

export class App extends React.Component {
  public render(): React.ReactElement {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route
              exact
              path="/services"
              component={() => <div>Services</div>}
            />
            <Route
              exact
              path="/customsoftware"
              component={() => <div>Custom software</div>}
            />
            <Route
              exact
              path="/mobileapps"
              component={() => <div>mMbile apps</div>}
            />
            <Route
              exact
              path="/websites"
              component={() => <div>websites</div>}
            />
            <Route
              exact
              path="/revolution"
              component={() => <div>revolution</div>}
            />
            <Route exact path="/about" component={() => <div>about</div>} />
            <Route exact path="/contact" component={() => <div>contact</div>} />
            <Route
              exact
              path="/estimate"
              component={() => <div>estimate</div>}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
