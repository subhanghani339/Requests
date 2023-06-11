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
          <div style={{ display: "flex", gap: "25px" }}>
            <div style={{ flexBasis: "25%" }}>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "29.3972px",
                  lineHeight: "35px",
                  letterSpacing: "-0.015em",
                  color: "#48AF78",
                }}
              >
                St Judes Hospital
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16.9257px",
                  lineHeight: "20px",
                  letterSpacing: "-0.005em",
                  color: "#959595",
                }}
              >
                Sarasota, FL, 33178
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexBasis: "25%",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "27.9429px",
                lineHeight: "34px",
                letterSpacing: "-0.02em",
                color: "#48AF78",
                borderLeft: "1.3193px solid rgba(0, 0, 0, 0.3)",
                borderRight: "1.3193px solid rgba(0, 0, 0, 0.3)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                10{" "}
                <span
                  style={{
                    fontfamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16.5813px",
                    lineHeight: "20px",
                    letterSpacing: "-0.005em",
                    color: "#959595",
                  }}
                >
                  October
                </span>
              </div>{" "}
              -
              <div style={{ display: "flex", flexDirection: "column" }}>
                17{" "}
                <span
                  style={{
                    fontfamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16.5813px",
                    lineHeight: "20px",
                    letterSpacing: "-0.005em",
                    color: "#959595",
                  }}
                >
                  December
                </span>
              </div>
            </div>
            <div style={{ flexBasis: "50%" }}>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "29.3972px",
                  lineHeight: "35px",
                  letterSpacing: "-0.015em",
                  color: "#48AF78",
                }}
              >
                20 Rooms
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16.9257px",
                  lineHeight: "20px",
                  letterSpacing: "-0.005em",
                  color: "#959595",
                }}
              >
                10 Singles, 10 Doubles
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              height: "48px",
              marginTop: "50px",
              border: "1px solid #959595",
              borderRadius: "24px",
            }}
            className="div2"
          >
            <div
              style={{
                flexBasis: "40%",
                background: "#FDF307",
                borderRadius: "24px 0px 0px 24px",
              }}
            >
              Received
            </div>
            <div
              style={{
                flexBasis: "20%",
                borderLeft: "1px solid #959595",
                borderRight: "1px solid #959595",
              }}
            >
              Negotiating
            </div>
            <div style={{ flexBasis: "40%" }}>Completed</div>
          </div>
        </div>

        <div className="box-2">
          <div style={{ display: "flex", gap: "25px" }}>
            <div style={{ flexBasis: "25%" }}>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "29.3972px",
                  lineHeight: "35px",
                  letterSpacing: "-0.015em",
                  color: "#48AF78",
                }}
              >
                St Judes Hospital
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16.9257px",
                  lineHeight: "20px",
                  letterSpacing: "-0.005em",
                  color: "#959595",
                }}
              >
                Sarasota, FL, 33178
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexBasis: "25%",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "27.9429px",
                lineHeight: "34px",
                letterSpacing: "-0.02em",
                color: "#48AF78",
                borderLeft: "1.3193px solid rgba(0, 0, 0, 0.3)",
                borderRight: "1.3193px solid rgba(0, 0, 0, 0.3)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                10{" "}
                <span
                  style={{
                    fontfamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16.5813px",
                    lineHeight: "20px",
                    letterSpacing: "-0.005em",
                    color: "#959595",
                  }}
                >
                  October
                </span>
              </div>{" "}
              -
              <div style={{ display: "flex", flexDirection: "column" }}>
                17{" "}
                <span
                  style={{
                    fontfamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16.5813px",
                    lineHeight: "20px",
                    letterSpacing: "-0.005em",
                    color: "#959595",
                  }}
                >
                  December
                </span>
              </div>
            </div>
            <div style={{ flexBasis: "50%" }}>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "29.3972px",
                  lineHeight: "35px",
                  letterSpacing: "-0.015em",
                  color: "#48AF78",
                }}
              >
                20 Rooms
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16.9257px",
                  lineHeight: "20px",
                  letterSpacing: "-0.005em",
                  color: "#959595",
                }}
              >
                10 Singles, 10 Doubles
              </p>
            </div>
          </div>

          <div
            style={{
              width: "66%",
              background: "#44A16F",
              height: "48px",
              marginTop: "50px",
              border: "1px solid #959595",
              borderRadius: "24px",
              color: "#fff",
              paddingLeft: "22px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Completed
          </div>

          <div className="multiple-boxes">
            <div>
              <svg
                width="54"
                height="59"
                viewBox="0 0 54 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0189 6.56303C19.7547 9.38375 14.5925 21.9731 12.0566 49.7647M38.3208 3C34.5472 8.04762 26.7283 25.7143 25.6415 56M3 36.8487C8.13208 30.3165 24.917 17.6084 51 19.0336"
                  stroke="#85C371"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
              <span className="holiday">Holiday Inn</span>
              <div className="booking">
                <span>1.5 miles away from joblocation.</span>
                <div>
                  <div className="booking-rates">
                    <span>Singles: $120</span>
                    <span>Doubles: $145</span>
                  </div>
                  <div className="book-now">
                    <a href="#">Book Now</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <svg
                width="54"
                height="59"
                viewBox="0 0 54 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0189 6.56303C19.7547 9.38375 14.5925 21.9731 12.0566 49.7647M38.3208 3C34.5472 8.04762 26.7283 25.7143 25.6415 56M3 36.8487C8.13208 30.3165 24.917 17.6084 51 19.0336"
                  stroke="#85C371"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
              <span className="holiday">Holiday Inn</span>
              <div className="booking">
                <span>1.5 miles away from joblocation.</span>
                <div>
                  <div className="booking-rates">
                    <span>Singles: $120</span>
                    <span>Doubles: $145</span>
                  </div>
                  <div className="book-now">
                    <a href="#">Book Now</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <svg
                width="54"
                height="59"
                viewBox="0 0 54 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0189 6.56303C19.7547 9.38375 14.5925 21.9731 12.0566 49.7647M38.3208 3C34.5472 8.04762 26.7283 25.7143 25.6415 56M3 36.8487C8.13208 30.3165 24.917 17.6084 51 19.0336"
                  stroke="#85C371"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
              <span className="holiday">Holiday Inn</span>
              <div className="booking">
                <span>1.5 miles away from joblocation.</span>
                <div>
                  <div className="booking-rates">
                    <span>Singles: $120</span>
                    <span>Doubles: $145</span>
                  </div>
                  <div className="book-now">
                    <a href="#">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chat">
            <img src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=chat" width="80px" height='100px' />
      </div>
    </div>
  );
}

export default App;
