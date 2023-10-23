
function getInputValueFromSelectedOption(idx: number):string | undefined {
  const selectedOptions = localStorage.getItem('selectedOptions')?.split('')
  if (selectedOptions) {
    return selectedOptions[idx]
  }
  return ''
}


export const InputsBlock = `
    <div class="inputsBlock">
      ${Array.from({ length: 16 }).reduce((acc, _, i) => {
        return acc + `<input value='${getInputValueFromSelectedOption(i)}' key="${i}" type="text" class="input"/>`
      },'')}
    </div>
`
