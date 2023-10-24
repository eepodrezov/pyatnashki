import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  [k:string]: string
}


export function InputBlock() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.from({ length: 15 }).map((_,i) => (
        <input defaultValue="test" {...register('f' + i)} />
      ))}
      <input type="submit" />
    </form>
  )
}