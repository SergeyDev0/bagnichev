import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductCard from "../components/productCard/ProductCard";

const Home = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://65f168f3034bdbecc762682b.mockapi.io/products");
        const data = await response.json();
        setProducts(data[0].furniture);
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
        <h1 className="main__title">Мы рекомендуем</h1>
        <div className="main__wrapper-cards">
          {
            products.map((item, index) => (
              index < 10 && (
                <ProductCard 
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  price={item.price}
                  img={item.shorticon}
                />
              )
            ))
          }
        </div>
      </main>
      <Footer />
    </>
  )
};

export default Home;
