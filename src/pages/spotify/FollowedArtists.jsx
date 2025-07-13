import { useEffect } from "react";

const FollowedArtists = () => {
  useEffect(() => {
    window.location.href =
      "https://spotify-api-backend-jx7r.onrender.com/spotify/followed-artists";
  }, []);

  return null;
};

export default FollowedArtists;
