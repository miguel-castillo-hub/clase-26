const Header = () => {
  return (
    <>
      <header style={{ backgroundColor: "blue" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Imagen de logo" />
        <nav>
          <ul>
            {/* Cambiar elementos a por componentes Link de react-router-dom*/}
            <li><a href="/">Inicio</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/registrate">Regístrate</a></li>
            <button>Cerrar sesión</button>
          </ul>
        </nav>
      </header>
    </>
  )
}

export { Header }