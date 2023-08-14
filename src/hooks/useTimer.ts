import { useEffect, useState } from "react";

const useTimer = (initialSeconds?: number, callback?: () => void) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let remainingSeconds = seconds;

    const interval = setInterval(() => {
      remainingSeconds && remainingSeconds--;
      if (remainingSeconds === 0) {
        clearInterval(interval);
        callback && callback();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, callback]);

  return [seconds, setSeconds];
};

export default useTimer;
