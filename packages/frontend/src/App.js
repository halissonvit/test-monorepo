import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiData, setApiData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + "/health");
        const json = await response.json();
        setApiData(json);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <pre style={{ textAlign: "left" }}>
          <code>{!isLoading && JSON.stringify(apiData || {}, null, 2)}</code>
        </pre>
      </header>
    </div>
  );
}

export default App;
