import { Navigate, useLocation } from 'react-router'
import useAuth from '../Hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <div>loading....</div>
  if (user) return children
  return <Navigate to='/Register' state={location.pathname} replace='true' />
}

export default PrivateRoute
