import { useEffect } from "react";

const StopPlayback = () => {
  useEffect(() => {
    window.location.href =
      "https://spotify-api-backend-jx7r.onrender.com/spotify/stop";
  }, []);

  return null;
};

export default StopPlayback;
