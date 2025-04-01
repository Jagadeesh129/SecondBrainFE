import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <>
      <Button variant='primary' text='Share'/>
      <Button variant='secondary' startIcon={<PlusIcon/>} text='Add Content'/>
    </>
  )
}

export default App
