import "./App.css";
import logo from "./assets/codeConnectTitle.png";
import TextField from "@mui/material/TextField";
import Typography from "@mui/joy/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import BasicTextField from "./components/BasicTextField";
import CrendetialsTextField from "./components/CredentialsTextField";

function App() {
  return (
    <div className="main">
      <img className="codeConnectLogo" src={logo} alt="mainTitle" />

      <div className="sub-main">
        <div>
          <h1 className="titleCodeConnect">Lets Get You CodeNected</h1>
        </div>

        <div className="boxName">
          <BasicTextField name="Name" />
        </div>
        <div className="boxLastName">
          <BasicTextField name="Last Name" />
        </div>
        <div className="boxGmail">
          <CrendetialsTextField name="Gmail" />
        </div>
        <div className="boxPassword">
          <CrendetialsTextField name="Password" />
        </div>

        {/* <div>
          <TextField
            sx={{
              mt: "10em",
              ml: "3em",
              width: "12em",
            }}
            required
            id="standard-required"
            label="Required"
            placeholder="First Name"
            variant="standard"
          />
        </div>

        <div>
          <TextField
            sx={{
              mt: "10em",
              ml: "8em",
              width: "12em",
            }}
            required
            id="standard-required"
            label="Required"
            placeholder="Last Name"
            variant="standard"
          />
        </div>

        <div>
          <TextField
            sx={{
              mt: "16em",
              ml: "-57em",
              width: "18em",
            }}
            required
            id="standard-required"
            label="Required"
            placeholder="example@email.com"
            variant="standard"
          />
        </div>

        <div>
          <TextField
            sx={{
              mt: "16em",
              ml: "-20em",
              width: "10em",
            }}
            required
            id="standard-required"
            label="Required"
            placeholder="MM/DD/YYYY"
            variant="standard"
          />
        </div>

        <div>
          <TextField
            sx={{
              mt: "23em",
              ml: "-60em",
            }}
            id="standard-password-input"
            label="Password*"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </div> */}

        <div>
          <h3 className="userHasAccount">Already have an Account? </h3>
        </div>

        <div>
          <Link
            sx={{
              position: "absolute",
              p: 1,
              mt: "46.34em",
              ml: "4.5em",
            }}
            className="createAccButton"
            component="button"
            variant="body2"
            onClick={() => {
              console.info("Login here!");
            }}
          >
            Login Here!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
