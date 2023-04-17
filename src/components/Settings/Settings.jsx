import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  const handleToggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      <label htmlFor="fullscreen-toggle">Full screen</label>
      <input
        id="fullscreen-toggle"
        type="checkbox"
        checked={isFullscreen}
        onChange={handleToggleFullscreen}
      />
    </div>
  );
};

export default FullscreenToggle;
