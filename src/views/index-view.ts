import typescriptLogo from '../shared/accets/icons/typescript.svg'
import viteLogo from '../shared/accets/icons/vite.svg'
import { ROUTES } from '../shared/lib/constants'

export const IndexView = `
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
  </a>
  <h1>Решатель пятнашек</h1>
  <p>Проект полностью ванильный.</br> Приложение на Vite используется исключительно для удобства написания кода и использования Typescript. </br> Весь функционал на чистом JS без библиотек</p>
  <div class="card">
  </div>
  <a class="read-the-docs" href='/${ROUTES.INPUT}'>
    click to fill in the pyatnashkas fields
  </p>
</div>
`