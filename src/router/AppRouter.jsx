import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useCheckAuth } from '../hooks';
import { CheckingAuth } from '../components/CheckingAuth';
import { EcommerceRouter } from './EcommerceRouter';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if(status === 'checking'){
    return <CheckingAuth/>
  }

  return (

    <Routes>
      {
        (status === 'authenticated')
        ? <Route path='/*' element={ <EcommerceRouter/> }/>
        : <Route path='/auth/*' element={<AuthRoutes/>  }/>
      }
      <Route path='/*' element={ <Navigate to='/auth/login'/>}/>
    </Routes>
  )
}