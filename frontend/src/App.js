import "./css/app.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";

function App() {
  return (
    <Router>
      <div className="frame container">
        <div className="glass">
          <div className="content">
            <Route path="/lists/:id" component={ListScreen} />
            <Route path="/" exact component={HomeScreen} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
