import { useContext, useEffect } from "react";
import { CountdownContainer, Separator } from "./styled";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export const Countdown = () => {
  const {
    activeCycle,
    markAsCurrentCycleAsFinished,
    activeCycleId,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );

        if (secondsDifference >= totalSeconds) {
          markAsCurrentCycleAsFinished();
          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else setSecondsPassed(secondsDifference);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    activeCycleId,
    markAsCurrentCycleAsFinished,
    totalSeconds,
    setSecondsPassed,
  ]);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`;
    else document.title = "Ignite Timer";
  }, [activeCycle, minutes, seconds]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
};
