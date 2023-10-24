import { InputBlock, SelectBlock, BackButton } from "../features"
import { Seperator } from "../ui"
import { atom } from "jotai"
import { useAtomValue } from "jotai"

export const selectedValueAtom = atom<string>('')

export const InputView = () => {
  const selectedValue = useAtomValue(selectedValueAtom)
  return (
    <div>
      <BackButton />
      <InputBlock />
      <Seperator text='ИЛИ'/>
      <SelectBlock />
      {selectedValue && 
        <button className="mt-5">
          <a href="/result">Посчитать решение</a>
        </button>
      }
    </div>
  )
}
