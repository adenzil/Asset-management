import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Siderbar from './Components/Siderbar'
import Dashboard from './Components/Dashboard'
import Assets from './Components/Assets'

function App() {
  return (
    <div className="App">
      <div className="flex flex-no-wrap">
        <BrowserRouter>
          <Siderbar />
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="assets" element={<Assets />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
