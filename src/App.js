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

      <div className="main-screen">
        <p className="numberOfRequests">You currently have 3 requests</p>
        <div className="box-1">
          <div style={{display: 'flex'}}>
            <div style={{flexBasis: '25%'}}>
              <p style={{fontFamily: 'Lato',fontStyle: 'normal', fontWeight: 700, fontSize: '29.3972px', lineHeight: '35px', letterSpacing: '-0.015em', color: '#48AF78',}}>St Judes Hospital</p>
              <p style={{fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '16.9257px', lineHeight: '20px', letterSpacing: '-0.005em', color: '#959595'}}>Sarasota, FL, 33178</p>
            </div>
            <div style={{display:'flex', justifyContent:'space-around', flexBasis: '25%', fontFamily: 'Lato', fontStyle: 'normal', fontWeight: 700, fontSize: '27.9429px', lineHeight: '34px', letterSpacing: '-0.02em', color: '#48AF78'}}>
              <div style={{display:'flex', flexDirection: 'column',}}>10 <span style={{fontfamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '16.5813px', lineHeight: '20px', letterSpacing: '-0.005em', color: '#959595'}}>October</span></div> - 
              <div style={{display:'flex', flexDirection: 'column',}}>17 <span style={{fontfamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '16.5813px', lineHeight: '20px', letterSpacing: '-0.005em', color: '#959595'}}>December</span></div>
            </div>
            <div style={{flexBasis: '50%'}}>
              <p style={{fontFamily: 'Lato',fontStyle: 'normal', fontWeight: 700, fontSize: '29.3972px', lineHeight: '35px', letterSpacing: '-0.015em', color: '#48AF78',}}>20 Rooms</p>
              <p style={{fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '16.9257px', lineHeight: '20px', letterSpacing: '-0.005em', color: '#959595'}}>10 Singles, 10 Doubles</p>
            </div>
          </div>

          <div style={{display: 'flex', height: '48px', marginTop: '50px', border: '1px solid #959595', borderRadius: '24px'}} className="div2">
            <div style={{flexBasis: "40%", background: '#FDF307', borderRadius: '24px 0px 0px 24px',}}>Recieved</div>
            <div style={{flexBasis: "20%", borderLeft:'1px solid #959595', borderRight:'1px solid #959595'}}>Negotiating</div>
            <div style={{flexBasis: "40%"}}>Completed</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
