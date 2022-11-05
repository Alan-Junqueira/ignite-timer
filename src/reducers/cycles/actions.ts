export enum ActionTypes {
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export interface ICycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export const CyclesAction = {
  createNewCycle(newCycle: ICycle) {
    return {
      type: ActionTypes.CREATE_NEW_CYCLE,
      payload: { newCycle },
    }
  },
  interruptCycle() {
    return {
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    }
  },
  markCurretCycleAsFinished() {
    return {
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    }
  },
}
