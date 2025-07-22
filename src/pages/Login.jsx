import { Layout } from "../components/Layout"

const Login = () => {
  return (
    <Layout background="red">
      <h1>Inicia sesión</h1>

      <section>
        <h2>Hola, bienvenido de nuevo.</h2>
        <form>
          <div>
            <label>Correo Electrónico: </label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Contraseña: </label>
            <input type="password" name="password" />
          </div>
          <button>Ingresar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Login }