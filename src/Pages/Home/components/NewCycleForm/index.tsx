import { FormContainer, MinutesAmountInput, TextInput } from './styled'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TextInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-properties"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-properties">
        <option value="Opção 1" />
        <option value="Opção 2" />
        <option value="Opção 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={5}
        max={60}
        step={5}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos</span>
    </FormContainer>
  )
}
