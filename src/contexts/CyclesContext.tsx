import { createContext, ReactNode, useReducer, useState } from 'react'

interface ICyclesContextProvider {
  children: ReactNode
}

interface ICycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface IcreateNewCycle {
  task: string
  minutesAmount: number
}

interface ICyclesContext {
  activeCycle: ICycle | undefined
  activeCycleId: string | null
  markAsCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: IcreateNewCycle) => void
  interruptCycle: () => void
  cycles: ICycle[]
}

export const CyclesContext = createContext({} as ICyclesContext)

export const CyclesContextProvider = ({ children }: ICyclesContextProvider) => {
  const [cycles, dispatch] = useReducer((state: ICycle[], action: any) => {
    if (action.type === 'CREATE_NEW_CYCLE') {
      return [...state, action.payload]
    }

    return state
  }, [])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const createNewCycle = (data: IcreateNewCycle) => {
    const id = String(new Date().getTime())

    const newCycle: ICycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    dispatch({
      type: 'CREATE_NEW_CYCLE',
      payload: newCycle,
    })
    // setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    // reset()
  }

  const interruptCycle = () => {
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycle?.id) {
    //       return {
    //         ...cycle,
    //         interruptedDate: new Date(),
    //       }
    //     } else return cycle
    //   }),
    // )

    setActiveCycleId(null)
  }

  const markAsCurrentCycleAsFinished = () => {
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return {
    //         ...cycle,
    //         finishedDate: new Date(),
    //       }
    //     } else return cycle
    //   }),
    // )
  }

  return (
    <CyclesContext.Provider
      value={{
        markAsCurrentCycleAsFinished,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCycle,
        cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
