import backArrow from '../shared/accets/icons/back-arrow.svg'
import { InputsBlock,InputSelect  } from '../features'

export const InputView = `
    <div style='display: flex;flex-direction: column;'>
        <a href="/" style="width: 50px;"> 
            <img 
                src="${backArrow}" class="backButton" alt="back" />
        </a>
        <h1>Можете самостоятельно заполнить матрицу</h1>
        ${InputsBlock}
        <h2>Или выбрать один из варинтов заполнения</h2>
        ${InputSelect}
        <a
            href='/result'
        >
            Найти решение
        </a>
    </div>
`