import { useForm, SubmitHandler } from "react-hook-form"
import { validStartOptions } from "../helpers/valid-start-options"
import { useAtom } from "jotai"
import { selectedValueAtom } from "../views"
import { useEffect } from "react"

type Inputs = {
  selectedOption: string
}

export function SelectBlock() {
  const {
    register,
    handleSubmit,
    setValue
  } = useForm<Inputs>()
  const [selectedValue, setSelectedValue] = useAtom(selectedValueAtom)
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSelectedValue(data.selectedOption)
  }

  useEffect(() => {
    setValue('selectedOption', selectedValue)
  },[selectedValue])

  return (
    <div
      className="flex flex-col items-center gap-10"
    >
      <h1>Выберите из готовых</h1>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <div
         className=""
        >
            <select 
                {...register('selectedOption')}  
                className="w-[400px] h-[30px]"
                defaultValue={selectedValue}
            >
                {validStartOptions.map((startVariant) => (
                    <option key={startVariant.value} value={startVariant.value}>{startVariant.value}</option>
                ))}
            </select>
        </div>
        <button type="submit">Сохранить вариант</button>
      </form>
    </div>
  )
}