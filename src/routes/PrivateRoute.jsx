import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (user) return children

  return <Navigate to='/login' state={location.pathname} replace={true} />
}

export default PrivateRoute
