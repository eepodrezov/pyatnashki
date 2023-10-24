import { InputBlock, SelectBlock, BackButton } from "../features"
import { Seperator } from "../ui"
import { atom } from "jotai"
import { useAtomValue } from "jotai"

export const selectedValueAtom = atom<string>('')

export const InputView = () => {
  const selectedValue = useAtomValue(selectedValueAtom)
  function handleClickSolve() {
    localStorage.setItem('selectedValue', selectedValue)
  }
  return (
    <div>
      <BackButton />
      <InputBlock />
      <Seperator text='ИЛИ'/>
      <SelectBlock />
      {selectedValue && 
        <button onClick={handleClickSolve} className="mt-5">
          <a href="/result">Посчитать решение</a>
        </button>
      }
    </div>
  )
}
