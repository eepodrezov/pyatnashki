import './style.css'
import { getValidView } from './views/get-valid-view.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = getValidView(window.location.pathname)

const selectSubmitBtn = document.getElementById('selectSubmit');
const sb = document.getElementById('inputOptions') as HTMLSelectElement
function setSelectedOptionToLocalStorage(value:string): void {
    localStorage.setItem('selectedValue', value)
}
selectSubmitBtn?.addEventListener('click', () => setSelectedOptionToLocalStorage(sb.value))