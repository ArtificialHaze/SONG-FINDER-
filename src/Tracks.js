import React from "react";
import { useGlobalContext } from "./context";
import Spinner from "./Spinner";
import Track from "./Track";

const Tracks = () => {
  const { state } = useGlobalContext();
  if (state.track_list === undefined || state.track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <h3 className="text-center mb-4">{state.heading}</h3>
        <div className="row">
          {state.track_list.map((item) => (
            <Track track={item.track} key={item.track.track_id} />
          ))}
        </div>
      </>
    );
  }
};

export default Tracks;
