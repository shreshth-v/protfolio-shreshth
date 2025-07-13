import { useEffect } from "react";

const Spotify = () => {
  useEffect(() => {
    window.location.href =
      "https://spotify-api-backend-jx7r.onrender.com/spotify";
  }, []);

  return null;
};

export default Spotify;
