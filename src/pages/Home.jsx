import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"

const Home = () => {
  const [products, setProducts] = useState([])
  // simulando existencia del usuario, proximamente este estado será global.
  const [productToEdit, setProductToEdit] = useState(null)
  const [showPoppup, setShowPoppup] = useState(null)
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")

  const { user } = useAuth()

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()

    setProducts(data)
  }

  // El array vacío (dependencias) espera a que ejecute el return del jsx. Si tiene algo, useEffect se va a ejecutar cada vez que se modifique lo que este dentro de la dependencia.
  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    if (response.ok) {
      setProducts(prevProducts => prevProducts.filter((product) => product.id != id))
      // fetchingProducts()
    }
  }

  const handleOpenEdit = (product) => {
    setShowPoppup(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)
  }

  // petición al backend mediante fetch para modificar -> métido PATCH / PUT https://fakeproductapi.com/product
  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }

    try {
      const response = await fetch(`https://fakeproductapi.com/products/${productToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
      })

      if (response.ok) {
        const data = await response.json()
        setProducts(prevProduct =>
          prevProduct.map((product) =>
            product.id === productToEdit.id
              ? data
              : product
          ))
        // fetchingProducts()
      }
      setShowPoppup(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <section className="casacompleto">
        <section className="casa">
          <h1>Bienvenido a Nuestra Tienda</h1>
          <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>

          {
            productToEdit && <section className="popup-edit">
              <h2>Editando producto.</h2>
              <button onClick={(e) => setShowPoppup(null)}>Cerrar</button>
              <form onSubmit={() => handleUpdate()}>
                <input type="text" placeholder="Ingrese el título" value={titleEdit} onChange={(e) => setTitleEdit(e.target.value)} />
                <input type="number" placeholder="Ingrese el precio" value={priceEdit} onChange={(e) => setPriceEdit(e.target.value)} />
                <textarea placeholder="Ingrese la descripción" value={descriptionEdit} onChange={(e) => setDescriptionEdit(e.target.value)}></textarea>
                <input type="text" placeholder="Ingrese la categoría" value={categoryEdit} onChange={(e) => setCategoryEdit(e.target.value)} />
                <input type="text" placeholder="Ingrese la url de la imagen" value={imageEdit} onChange={(e) => setImageEdit(e.target.value)} />
                <button>Actualizar</button>
              </form>
            </section>
          }

        </section>

        <section className="elegirnos">
          <h2>¿Por qué elegirnos?</h2>
          <ul>
            <li>
              <h3>Envíos a todo el país</h3>
              <p>Recibí tu compra en la puerta de tu casa estés donde estés.</p>
            </li>
            <li>
              <h3>Pagos seguros</h3>
              <p>Trabajamos con plataformas que garantizan tu seguridad.</p>
            </li>
            <li>
              <h3>Atención personalizada</h3>
              <p>Estamos disponibles para ayudarte en todo momento.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="productostitulo">Nuestros productos</h2>
          <p className="productosparrafo">Elegí entre nuestras categorías más populares.</p>
          <div>
            {
              products.map((product) => <div key={product.id}>
                <h2 key={product.id}>{product.title}</h2>
                <img width="80px" src={product.image} alt={`Imagen de ${product.title}`} />
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p><strong>{product.category}</strong></p>
                {
                  user && <div>
                    <button onClick={() => handleOpenEdit(product)}>Actualizar</button>
                    <button onClick={() => handleDelete(product.id)}>Borrar</button>
                  </div>
                }
              </div>)
            }
          </div>
        </section>
      </section>
    </Layout>
  )
}

export { Home }