import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "./context";

const REACT_APP_MM_KEY = "[ჩასვით API KEY]";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");
  const { setState, state } = useGlobalContext();

  const handleonChange = (e) => {
    setUserInput(e.target.value);
  };

  const findSong = (e) => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${REACT_APP_MM_KEY}`
      )
      .then((res) => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Search" });
      })
      .catch((err) => console.log(err));
  }, [trackTitle]);

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music"></i>Search a Song
      </h1>
      <p className="lead text-center">Get the Lyrics</p>
      <form action="#" onSubmit={findSong}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song..."
            name="tracktitle"
            value={userInput}
            onChange={handleonChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          Get Lyrics
        </button>
      </form>
    </div>
  );
};

export default Search;
