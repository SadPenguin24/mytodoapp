import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";

function App() {
  return (
    <Router>
      <div className="Container">
        <div className="glass">
          <Route path="/lists/:id" component={ListScreen} />
          <Route path="/" exact component={HomeScreen} />
        </div>
      </div>
    </Router>
  );
}

export default App;
