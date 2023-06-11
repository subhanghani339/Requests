import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="SideBar">
        <h2>LODGN</h2>
        <ul className="links">
          <li>Current Requests</li>
          <span className="line"></span>
          <li>Ongoing Stays</li>
          <span className="line"></span>
          <li>Previous Stays</li>
          <span className="line"></span>
          <li>Reports</li>
          <span className="line"></span>
        </ul>
        <div className="BottomBar">
            <button>Log-Out</button>
            <span className="text">Help Desk</span>
            <span className="number">786-874-9988</span>
        </div>
      </div>
    </div>
  );
}

export default App;
