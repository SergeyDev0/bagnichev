import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductCard from "../components/productCard/ProductCard";

const Toys = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://65f168f3034bdbecc762682b.mockapi.io/toys");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchProducts()
  }, [])
  return (
    <>
      <Header />
      <main className="main">
        <h1 className="main__title">Игрушки</h1>
        <div className="main__wrapper-cards">
          {
            products.map((item) => {
              if(item.id > 25) 
              return (
                <ProductCard 
                key={item.id}
                id={item.id}
                title={item.name}
                price={item.price}
                img={item.shorticon}
              />
              )
            })
          }
        </div>
      </main>
      <Footer /> 
    </>
  )
};

export default Toys;
