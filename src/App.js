import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Videos from "./pages/Videos";
import Channel from "./pages/Channel";
import Navbar from "./component/Navbar";
import Error from "./pages/Error";
function App() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchItem" element={<Search />} />
          <Route path="/video/:id" element={<Videos />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
