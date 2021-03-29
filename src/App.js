import Layout from "./components/Layout/Layout";
import FastFoodBuilder from "./components/FastFoodBuilder/FastFoodBuilder";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <FastFoodBuilder />
      </Layout>
    </div>
  );
}

export default App;