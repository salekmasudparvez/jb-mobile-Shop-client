
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../useAuth/useAuth'
const useRole = () => {
  const { user, loading } = useAuth();

  const { data: role = '', isLoading } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axios.get(`https://mobile-shop-pro.vercel.app/users/${user?.email}`)
      return data.role
    },
  })

  //   Fetch user info using logged in user email

  return [role, isLoading]
}

export default useRole