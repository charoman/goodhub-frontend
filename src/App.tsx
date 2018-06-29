import './App.scss';
import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderBar from "./common/HeaderBar/HeaderBar";
import Dashboard from "./common/Dashboard/Dashboard";
import { store, history } from "./redux/store";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { Route } from "react-router";

class App extends React.Component {
  public render() {
    return (
      <div>
        <CssBaseline />
        <HeaderBar />
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Route exact path="/" component={Dashboard} />
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
