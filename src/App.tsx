import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { actions } from './app/store'
import { getName } from './app/store/asyncThunks'

function App() {
  const dispatch = useAppDispatch()
  const name = useAppSelector((state)=> state.slice.name)
  const age = useAppSelector((state)=> state.slice2.age)
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
    </div>
  )
}

export default App
