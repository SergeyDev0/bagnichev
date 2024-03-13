import React from "react"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import img from "../assets/img/divan.webp"

const About = () => {
  return (
    <>
      <Header />
      <main className="main about">
        <div className="about__wrapper-illustration">
          <img src={img} className="about__wrapper-illustration--img" />
        </div>
        <div className="about__wrapper-content">
          <p className="about__text">Мы рады приветствовать вас в интернет-магазине мягких игрушек, где представлена вся продукция, производимая компанией "Багнычев ЮГ"!</p>
          <p className="about__text">В нашем интернет-магазине вы имеете возможность купить мягкие игрушки производства компании "Багнычев ЮГ" по самым выгодным ценам.</p>
          <p className="about__text">Мягкие игрушки являются самым популярным и распространенным видом детских игрушек. Мягкие игрушки принято дарить детям на праздники, ими украшают комнату. Игрушечные прилавки и детские комнаты обычно завалены всевозможными мягкими игрушками – огромными и крохотными, пушистыми и гладкими, звучащими и молчащими, страшными и симпатичными, гибкими и твёрдыми. Как выбрать среди этих мягких игрушек ту, что нужна конкретному ребёнку? Для ответа на этот вопрос недостаточно ориентироваться только на привлекательность и внешнее обаяние пушистого зверя.</p>
          <p className="about__text">Кроме классических и ретро моделей мягких игрушек мы производим большие мягкие игрушки, огромные мягкие игрушки, гигантские мягкие игрушки, ретро мягкие игрушки, музыкальные мягкие игрушки, реалистичные мягкие игрушки, а так же детские качалки, детскую мебель, детские диваны, детские кресла, детские каталки.</p>
          <p className="about__text">Мы тщательно следим за нашим ассортиментом отбирая в производство преимущественно только модели пользующиеся наибольшим спросом. В серийное производство запускаются только качественные и проверенные рынком модели игрушек.</p>
          <p className="about__text">Если у вас возникли какие-либо вопросы, просто позвоните нам по телефону (499) 940-42-39, свяжитесь с нами по электронной почте, или задайте их на нашем сайте, воспользовавшись формой обратной связи.</p>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default About;
