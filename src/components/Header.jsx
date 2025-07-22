import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header style={{ backgroundColor: "blue" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Imagen de logo" />
        <nav>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/registrate">Regístrate</Link></li>
            <button>Cerrar sesión</button>
          </ul>
        </nav>
      </header>
    </>
  )
}

export { Header }