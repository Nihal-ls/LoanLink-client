import { Navigate, useLocation } from 'react-router'
import useAuth from '../Hooks/useAuth'
import LoaidngSpinenr from '../Components/Shared/LoaidngSpinenr'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <LoaidngSpinenr/>
  if (user) return children
  return <Navigate to='/Register' state={location.pathname} replace='true' />
}

export default PrivateRoute
