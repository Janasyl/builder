import Layout from "./components/Layout/Layout";
import StreetFoodBuilder from "./components/StreetFoodBuilder/StreetFoodBuilder";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <StreetFoodBuilder />
      </Layout>
    </div>
  );
}

export default App;
