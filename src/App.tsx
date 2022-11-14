import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/store'
import { actions, RootState } from './app/store'
import { getName } from './app/store/asyncThunks'
import FirstPage from './app/pages/FirstPage'

function App() {
  const dispatch = useAppDispatch()
  const name = useAppSelector((state: RootState)=> state.slice.name)
  const age = useAppSelector((state: RootState)=> state.slice2.age)
  useEffect(()=>{
    // console.log("App Rendered")
  })
  {console.log('App Rendered')}
  return (
    <div>
      <h1>App Component</h1>
      <button
        onClick={() => {
          // dispatch(actions.setName({ name: 'hello' }))
          // dispatch(getName('someid'))
          dispatch(actions.slice1.setName({name:'Shaik Mohammed Bilal'}))
          dispatch(actions.slice2.setAge({age: 22}))
        }}
      >
        Click Me
      </button>
      <h1>Name: {name}</h1>
      <br/>
      <h1>Age: {age}</h1>
      <FirstPage/>
    </div>
  )
}

export default App
