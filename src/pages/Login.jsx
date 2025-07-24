import { useState } from "react"
import { Layout } from "../components/Layout"

const Login = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault
    setError("")
    setSuccess("")

    if (!email || !password) {
      setError("Debes completar todos los campos")
      return
    }

    const user = {
      username: username,
      email: email,
      password: password
    }

    console.log(user)
    setSuccess("Usuario logeado")

    setEmail("")
    setPassword("")
  }

  return (
    <Layout background="red">
      <h1>Login</h1>

      <section>
        <h2>Hola, bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Correo Electrónico: </label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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

        {
          error && <p style={{ color: "red" }}>{error}</p>
        }
        {
          success && <p style={{ color: "yellow" }}>{success}</p>
        }
      </section>
    </Layout>
  )
}

export { Login }