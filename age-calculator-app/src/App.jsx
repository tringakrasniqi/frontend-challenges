// import { useState } from 'react'
import AppCss from './App.module.css'
import AgeForm from './components/BirthdayForm'

function App() {

  return (
    <div className={AppCss.card}>
      <AgeForm/>
      <div className={AppCss.ageResult}>
        <div><span className={AppCss.ageNumber}>18</span> years</div>
        <div><span className={AppCss.ageNumber}>18</span> months</div>
        <div><span className={AppCss.ageNumber}>18</span> days</div>
      </div>
    </div>
  )
}

export default App
