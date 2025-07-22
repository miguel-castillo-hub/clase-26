import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header style={{ backgroundColor: "blue" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Imagen de logo" />
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Regístrate</Link></li>
            <button>Cerrar sesión</button>
          </ul>
        </nav>
      </header>
    </>
  )
}

export { Header }