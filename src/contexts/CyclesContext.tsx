import { createContext, ReactNode, useReducer, useState } from "react";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishDate?: Date;
}

interface NewCycleFormDataProps {
  task: string;
  minutesAmount: number;
}

interface IContextCycle {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markAsCurrentCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setSecondsPassed: (seconds: number) => void;
  interruptedCycle: () => void;
  createNewCycle: (data: NewCycleFormDataProps) => void;
  cycles: Cycle[];
}
interface ICycleContext {
  children: ReactNode;
}

export const CyclesContext = createContext({} as IContextCycle);

export function CyclesContextProvider({ children }: ICycleContext) {
  const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
    console.log(action);

    if (action.type === "CREATE_NEW_CYCLE") {
      return [...state, action.payload];
    }

    return state;
  }, []);

  console.log(cycles);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markAsCurrentCycleAsFinished() {
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycle?.id) {
    //       return {
    //         ...cycle,
    //         finishDate: new Date(),
    //       };
    //     } else return cycle;
    //   })
    // );
  }

  const interruptedCycle = () => {
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycle?.id) {
    //       return {
    //         ...cycle,
    //         interruptedDate: new Date(),
    //       };
    //     } else return cycle;
    //   })
    // );

    setActiveCycleId(null);
  };

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function createNewCycle(data: NewCycleFormDataProps) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch({
      type: "CREATE_NEW_CYCLE",
      payload: newCycle,
    });
    // setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
    // reset();
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markAsCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        interruptedCycle,
        createNewCycle,
        cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
