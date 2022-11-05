import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { ActionTypes, CyclesAction, ICycle } from '../reducers/cycles/actions'
import { cyclesReducer } from '../reducers/cycles/reducer'

interface ICyclesContextProvider {
  children: ReactNode
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
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state:1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      const secondsDifference = differenceInSeconds(
        new Date(),
        new Date(activeCycle.startDate),
      )
      return secondsDifference
    } else {
      return 0
    }
  })

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  useEffect(() => {
    localStorage.setItem(
      '@ignite-timer:cycles-state:1.0.0',
      JSON.stringify(cyclesState),
    )
  }, [cyclesState])

  const createNewCycle = (data: IcreateNewCycle) => {
    const id = String(new Date().getTime())

    const newCycle: ICycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    dispatch(CyclesAction.createNewCycle(newCycle))
    setAmountSecondsPassed(0)
  }

  const interruptCycle = () => {
    dispatch(CyclesAction.interruptCycle())
  }

  const markAsCurrentCycleAsFinished = () => {
    dispatch(CyclesAction.markCurretCycleAsFinished)
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
