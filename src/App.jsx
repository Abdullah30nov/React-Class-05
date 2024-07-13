import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Login from './Login/Login'
import Signup from './Signup/Signup'

function App() {
  let [form, setForm] = useState(false);
  const toggleForm = () => {
    setForm(!form);
  }



  return (
    <>
    {/* <Signup/>
    <Login/> */}
    {form? <Login toggleForm={toggleForm}/> : <Signup toggleForm={toggleForm}/>}
    </>
  )
}

export default App
