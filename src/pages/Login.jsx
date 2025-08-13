
import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ username, password })
    const isLogin = login(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
      navigate("/")
    }
  }

  return (
    <Layout background="red">
      <h1 className="login-h1">Inicia sesión</h1>

      <section className="login-form">
        <h2>Hola, bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de usuario: </label>
            <input type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label>Contraseña: </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button>Ingresar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Login }