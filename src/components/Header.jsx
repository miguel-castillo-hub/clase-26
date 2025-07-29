import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [user, setUser] = useState(true)

  return (
    <>
      <header style={{ backgroundColor: "blue" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Imagen de logo" />
        <nav>
          <ul>
            {/* Solo mostrar si hay usuario logeado */}
            {
              user && <>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <button>Cerrar sesión</button>
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