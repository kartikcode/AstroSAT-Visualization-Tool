import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Aladin from "./components/Aladin/Aladin";
import Topbar from "./components/Topbar/Topbar";
import InitialCard from "./components/Cards/InitialCard";
import StarfieldAnimation from "react-starfield-animation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "black",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles();
  // function for connecting the API endpoints
  const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { "Content-Type": "application/json" } : {},
    }).then((response) => {
      if (response.status >= 400) {
        // !response.ok
        return response.json().then((errResData) => {
          const error = new Error("Something went wrong!");
          error.data = errResData;
          throw error;
        });
      }
      return response.json();
    });
  };

  // function for fetching the cpmplaint database
  const [data, setData] = useState([]);
  useEffect(() => {
    sendHttpRequest("GET", "http://127.0.0.1:8000/isro/getdata/").then(
      (responseData) => {
        //console.log(responseData);
        setData(responseData);
      }
    );
  }, []);

  return (
    <div className={classes.root}>
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Topbar />
        </Grid>
        <Grid item xs={9}>
          <Aladin data={data} />
        </Grid>
        <Grid item xs={3}>
          <InitialCard />
        </Grid>
      </Grid>
    </div>
  );
}
