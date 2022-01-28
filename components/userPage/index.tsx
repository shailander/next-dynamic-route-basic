import React from 'react'
import { IUserProps } from '../../functions/types'

function UserPage({ userData }: { userData: IUserProps }) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className=" w-1/6 h-2/6">
        <div>ID : {userData.id}</div>
        <div>Name : {userData.name}</div>
        <div>Username : @{userData.username}</div>
        <div>Email : {userData.email}</div>
      </div>
    </div>
  )
}

export default UserPage
