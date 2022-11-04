import { useEffect, useRef, useState } from "react";

function usePlayerState($videoPlayer) {
  const [playerState, setPlayerState] = useState({
    playing: false,
    percentage: 0,
  });

  useEffect(() => {
    playerState.playing
      ? $videoPlayer.current.play()
      : $videoPlayer.current.pause();
  }, [playerState.playing]);

  const toggleVideoPlay = () => {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    });
  };

  const handleTimeUpdate = () => {
    const currentPercentage =
      ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100;
    setPlayerState({
      ...playerState,
      percentage: currentPercentage,
    });
  };

  const handleChangeVideoPercentage = (event) => {
    const currentPercentage = event.target.value;
    $videoPlayer.current.currentTime =
      ($videoPlayer.current.duration / 100) * currentPercentage;

    setPlayerState({
      ...playerState,
      percentage: currentPercentage,
    });
  };

  return {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPercentage,
  };
}

export const VideoComponent = ({ data }) => {
  const videoURL = `http://localhost:3000/videos/${data}`;
  const $videoPlayer = useRef(null);
  const {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPercentage,
  } = usePlayerState($videoPlayer);

  return (
    <div>
      <video height={300} ref={$videoPlayer} onTimeUpdate={handleTimeUpdate}>
        <source src={videoURL} type="video/mp4" />
      </video>
      <div className="controls">
        <button onClick={toggleVideoPlay}>
          {playerState.playing ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={playerState.percentage}
          onChange={handleChangeVideoPercentage}
        />
      </div>
    </div>
  );
};
