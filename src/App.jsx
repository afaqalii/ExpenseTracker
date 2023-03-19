import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseTracker from './components/ExpenseTracker'

function App() {

  return (
    <div className="app">
       <ExpenseTracker/>
    </div>
  )
}

export default App
