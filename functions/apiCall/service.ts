import { IUserProps } from '../types'
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

async function getUsersList() {
  const data = await axios.get<IUserProps[]>('users').then((res) => res.data)
  return data
}

async function getUserData(id: string | string[] | undefined) {
  const data = await axios
    .get<IUserProps>(`users/${id}`)
    .then((res) => res.data)
  return data
}

export { getUsersList, getUserData }
