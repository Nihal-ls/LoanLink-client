import axios from "axios"

export const saveorUpdateUsers = async (userData) =>{
const {data} = await axios.post(`${import.meta.env.VITE_DOMAIN}/users`,
    userData
)
return data
}