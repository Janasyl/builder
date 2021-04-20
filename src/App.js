import Layout from "./components/Layout/Layout";
import Bistro from "./components/HouseplantShop/Bistro"
import  "./App.css";
import Checkout from "./components/Checkout/Checkout";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={Bistro} exact />
          <Route path="/checkout" component={Checkout} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
