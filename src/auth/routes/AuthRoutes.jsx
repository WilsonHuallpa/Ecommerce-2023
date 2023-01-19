import { Navigate, Route, Routes } from 'react-router-dom';
import { SignIn, SignUp } from '../page';
export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={ <SignIn/> }/>
        <Route path='register' element={ <SignUp/> }/>
        <Route path='/*' element={ <Navigate to="/auth/login"/> } />
    </Routes>
  )
}