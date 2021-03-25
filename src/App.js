import Layout from "./components/Layout/Layout";
import FastFoodBuilder from "./components/FFBuilder/FFBuilder";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <FastFoodBuilder />
      </Layout>
    </div>
  );
}

export default App;
