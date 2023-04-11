import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './form-context/Home';
import Login from './form-context/Login';
import Form from './form-context/form';
import { stateContext } from './form-context/context';
import { initialState, stateReducer } from './form-context/Reducer';

const RouterContext = () => {
    // context 
    const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
        <stateContext.Provider value={{state, dispatch}}>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/form' element={<Form />}></Route>
                <Route path='*' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
        </stateContext.Provider>
  )
}

export default RouterContext;