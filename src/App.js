import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("Me", user);
      });
    }

    console.log("I HAVE A TOKEN", hash);
  }, []);

  return (
    <div className="app">
      {token ? <h1>I am logged in</h1> : <Login />}
      <Player />
      <Login />
    </div>
  );
}

export default App;
