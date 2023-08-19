import { useEffect } from "react";
import useTimer from "hooks/useTimer";
import { TimerProps } from "types/TimerProps";
import { Wrapper, Seconds, Message } from "./Timer.styled";

const Timer: React.FC<TimerProps> = ({
  initialSeconds,
  callback,
  message,
  margin,
}) => {
  const [seconds, setSeconds] = useTimer(initialSeconds, callback);

  useEffect(() => {
    if (typeof setSeconds === "function") {
      const interval = setInterval(() => {
        setSeconds((prevSeconds: number | undefined) =>
          prevSeconds !== undefined && prevSeconds > 0
            ? prevSeconds - 1
            : prevSeconds
        );
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [setSeconds, seconds]);

  return (
    <Wrapper margin={margin}>
      {typeof seconds === "number" && seconds > 0 && (
        <div>
          <Seconds>{seconds}</Seconds>
          <Message>{message}</Message>
        </div>
      )}
    </Wrapper>
  );
};

export default Timer;
