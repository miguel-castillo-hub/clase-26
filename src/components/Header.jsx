import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <header style={{ backgroundColor: "blue" }} className="cabeza">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Imagen de logo" />
        <nav className="navegacion">
          <ul>
            {/* Solo mostrar si hay usuario logeado */}
            {
              user && <>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <button onClick={handleLogout}>Cerrar sesión</button>
              </>
            }
            {/* Solo mostrar a usuarios no logeados */}
            {
              !user && <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Regístrate</Link></li></>
            }
          </ul>
        </nav>
      </header>
    </>
  )
}

export { Header }