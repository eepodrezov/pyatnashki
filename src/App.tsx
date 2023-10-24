import { getValidView } from './views/get-valid-view'
import './App.css'

function App() {
  return getValidView(window?.location?.href)
}

export default App
