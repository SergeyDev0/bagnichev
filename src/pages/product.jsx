import React from "react"
import { useParams } from 'react-router-dom';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        const response = await fetch(`https://65f168f3034bdbecc762682b.mockapi.io/toys/${id}`);
        const data = await response.json();
        setData(data);
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchDataProduct();
  }, [id])
  return (
    <>
      <Header />
      <main className="main product">
        <h2 className="product__title">{data.name}</h2>
        <div className="product__wrapper-img">
          <img src={data.img} alt={data.name} className="product--img" />
        </div>
        <h3 className="product__price">{data.price} ₽</h3>
        <p className="product__description">{data.description}</p>
        {
          data.width && (
            <>
              <h3 className="product__subtitle">Характеристики:</h3>
              <ul className="product__specifications__list">
                <li className="product__specifications__list-item">Высота: {data.height} см</li>
                <li className="product__specifications__list-item">Ширина: {data.width} см</li>
                <li className="product__specifications__list-item">Длина: {data.length} см</li>
              </ul>
            </>
          )
        }
      </main>
      <Footer />
    </>
  )
};

export default Product;
