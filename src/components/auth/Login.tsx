import React, { useState, useContext} from 'react'
import axios from 'axios'
import { HandleSuccessfulAuthentication } from "../pages/Home"

export default function Login() {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const handleSuccessfulAuthentication = useContext(HandleSuccessfulAuthentication)

  // const handleSubmit = (event: any) => {
  //   axios.post("http://localhost:3001/sessions",
  //     {
  //       user: {
  //         name: name,
  //         email: email,
  //         password: password
  //       }
  //     },
  //     { withCredentials: true }
  //   ).then(response => {
  //     console.log("login response: ", response)
  //     // if (response.data.status === 'created') {
  //     if (response.data.logged_in) {
  //       !!handleSuccessfulAuthentication && handleSuccessfulAuthentication(response.data)
  //     }
  //     console.log("registration res", response)
  //   }).catch(error => {
  //     console.log("registration error", error)
  //   })
  //   event.preventDefault()
  // }

  return (
    <div>
      <p>ログイン</p>
      {/* <form onSubmit={handleSubmit}> 
        <input
          type="name"
          name="name"
          placeholder="ユーザーネーム"
          value={name}
          onChange={event => setName(event.target.value)}
        />         
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">ログイン</button>
      </form> */}
    </div>
  )
}