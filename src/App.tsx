import React, { ChangeEvent, useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SignIn from "./signin";
import SignUp from "./signup";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  formControlLabel: {
    color: "black",
    "& label": {
      color: "black"
    }
  }
}));

function App() {
  const classes = useStyles();

  const [state, setState] = useState<string>("signin");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((event.target as HTMLInputElement).value);
  };

  const showFunction = useCallback(() => {
    if (state === "signin") {
      return <SignIn />;
    }
    if (state === "signup") {
      return <SignUp />;
    }
  }, [state]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <FormControl>
          <FormLabel color="info" id="demo-controlled-radio-buttons-group">
            Function
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={state}
            onChange={handleChange}
            row={true}
          >
            <FormControlLabel
              value="signin"
              control={<Radio color="primary" />}
              label={<Typography className={classes.formControlLabel}>Sign in</Typography>}
              color="primary"
            />
            <FormControlLabel
              value="signup"
              control={<Radio />}
              label={<Typography className={classes.formControlLabel}>Sign up</Typography>}
              color="primary"
            />
          </RadioGroup>
        </FormControl>
        {showFunction()}
      </div>
    </div>
  );
}

export default App;

