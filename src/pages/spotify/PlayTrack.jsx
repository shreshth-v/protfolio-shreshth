import { useEffect } from "react";

const PlayTrack = () => {
  useEffect(() => {
    window.location.href =
      "https://spotify-api-backend-jx7r.onrender.com/spotify/play";
  }, []);

  return null;
};

export default PlayTrack;
