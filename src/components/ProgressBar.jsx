import { useEffect, useState } from "react";

function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("set up interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("cleaning up interval");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <progress value={remainingTime} max={timer} />
    </div>
  );
}

export default ProgressBar;
