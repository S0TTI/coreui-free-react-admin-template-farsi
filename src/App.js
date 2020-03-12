import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import "./App.scss";

const loading = () => (
  <div className="animated fadeIn pt-1 text-center">
    <i className="fa fa-spinner fa-lg fa-2x fa-spin mt-4"></i>
    {"  "}
    بارگزاری...
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const Register = React.lazy(() => import("./views/Pages/Register"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/login"
              name="ورود"
              render={props => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="ثبت نام"
              render={props => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="صفحه 404"
              render={props => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="صفحه 500"
              render={props => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="خانه"
              render={props => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
