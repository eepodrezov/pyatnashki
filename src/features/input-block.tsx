import { useForm, SubmitHandler } from "react-hook-form"
import { useAtom } from "jotai"
import { selectedValueAtom } from "../views"
import { useEffect, useMemo } from "react"

type Inputs = {
  [k:string]: string
}


export function InputBlock() {
  const {
    register,
    handleSubmit,
    setValue,
    
  } = useForm<Inputs>()
  const [selectedValue, setSelectedValue] = useAtom(selectedValueAtom)
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSelectedValue(Object.values(data).join(''))
  }
  const selectedValueArr = selectedValue.split('')

  useEffect(() => {
    selectedValueArr.forEach((value,i) => setValue('f' + i, value))
  },[selectedValue])

  return (
    <div
      className="flex flex-col items-center gap-10"
    >
      <h1>Введите данных полей</h1>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <div
         className="grid grid-cols-4 grid-rows-4 gap-3"
        >
          {Array.from({ length: 16 }).map((_,i) =>  
            <input 
              key={'input' + i}
              type="text"
              {...register('f' + i)}  
              className="w-[40px] h-[40px] p-2"
              defaultValue={selectedValueArr?.[i]}
            />
          )}
        </div>
        <button type="submit">Сохранить поля</button>
      </form>
    </div>
  )
}