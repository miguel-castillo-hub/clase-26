import { Header } from "./Header"
import { Footer } from "./Footer"

const Layout = () => {
  return (
    <div className={props.background}>
      <Header />
      {props.children}
      <Footer />
    </ div>
  )
}

export { Layout }