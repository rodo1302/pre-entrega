import "./About.css";
import imgAbout from "../../assets/img-about.jpg";

export const About = () => {
  return (
    <section className="about">
      <h2>Acerca de</h2>
      <div className="about-content">
        <p>
          "Mi Tienda nace como un proyecto dedicado a facilitarte todo lo que
          necesitas para estudiar, crear y trabajar. Sabemos que los insumos de
          librería son la base de cualquier gran idea. Por eso, nos enfocamos en
          ofrecer una selección de materiales esenciales y de calidad, desde
          cuadernos y bolígrafos hasta todo tipo de papelería, de la forma más
          rápida y sencilla posible. Aunque somos un proyecto en desarrollo,
          nuestra misión es clara: ser tu lugar de referencia para conseguir
          esos insumos que te inspiran a dar lo mejor. ¡Gracias por acompañarnos
          en este proceso de aprendizaje! Explora nuestros productos y empieza
          tu próximo proyecto."
        </p>
        <img src={imgAbout} alt="Acerca de" />
      </div>
    </section>
  );
};
