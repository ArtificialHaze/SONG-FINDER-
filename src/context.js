import { createContext, useEffect, useState } from "react";
import axios from "axios";

const REACT_APP_MM_KEY = "[ჩასვით API KEY]";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  let initialState = {
    track_list: [],
    heading: "",
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${REACT_APP_MM_KEY}`
      )
      .then((response) => {
        setState({
          track_list: response.data.message.body.track_list,
          heading: "Top 10 Tracks",
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return createContext(AppContext);
};

export default ContextProvider;
