import { IUserProps } from '../types'

function filterPath(data: IUserProps[]) {
  const newData = data.map((item) => ({ params: { id: '' + item.id } }))
  return newData
}
export default filterPath
