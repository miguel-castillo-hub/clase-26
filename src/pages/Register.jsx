import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const { register } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }

    const newUser = {
      username: username,
      email: email,
      password: password
    }

    setSuccess("Usuario registrado")
    register(true)

    setUsername("")
    setEmail("")
    setPassword("")
  }

  return (
    <Layout background="red">
      <h1 className="login-h1">Regístrate</h1>

      <section className="login-form">
        <h2>Hola, bienvenido.</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label>Correo Electrónico: </label>
            <input
              type="email"
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

export { Register }