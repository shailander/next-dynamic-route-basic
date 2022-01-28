import { GetStaticPropsContext } from 'next'
import UserPage from '../../components/userPage'
import { getUsersList, getUserData } from '../../functions/apiCall/service'
import filterPath from '../../functions/filter'
import { IUserProps } from '../../functions/types/index'

const Users = (props: IUserProps) => {
  return <UserPage userData={props} />
}
export default Users

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context
  const data = await getUserData(params?.id)
  return {
    props: {
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
    },
  }
}

export async function getStaticPaths() {
  const data = await getUsersList()
  const pathsAll = filterPath(data)
  return {
    paths: pathsAll,
    fallback: false,
  }
}
/*
  pathsAll : 
  [
      {params : 
        {id : "1"}
        },
      {params : 
        {id : "2"}
        },
      ...
  ]
  */
