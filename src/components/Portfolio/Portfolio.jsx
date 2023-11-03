import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const data = [
    {
      img: "https://i.ibb.co/097xhg9/eccomerce.png",
      project: "Eccomerce-Website",
      description:
        "This is a simple ecommerce website built using react and redux for state management. It has features like add to cart, checkout",
      Technology: ["React", "Css", "Axios", "FakeStoreApi", "React-Router-dom"],
      github: "https://github.com/anish-stack/EcommerceTemplete",
      websiteLink:
        "https://eccomerce-dev-anish-3ckkxe1y2-anish-stack.vercel.app/",
    },
    {
      img: "https://i.ibb.co/5xTLzV8/wraprox.png",
      project: "Gifts Website",
      description:
        "Explore a delightful online gifts store built with HTML, CSS, and JavaScript. This website offers a seamless shopping experience, featuring an array of unique gift options. ",
      Technology: ["Html", "Css", "Javscript", "GSAP", "Locomotive-js"],
      github: "https://github.com/anish-stack/wrapox",
      websiteLink: "https://www.wrapxo.com/",
    }
    ,
    {
      img: "https://i.ibb.co/zsgYxTY/bhansaghar.png",
      project: "Full Stack Ecommerce Website",
      description:
        "A full-stack e-commerce site featuring React, Redux, Node, Express, and MongoDB. Shop, add to cart, and checkout securely.",
      Technology: ["React", "Node", "Express", "MongoDB"],
      github: "Private",
      websiteLink: "https://www.bhansaaghar.com/",
    },
    
    {
      img: "https://i.ibb.co/dJp97F9/crm.png",
      project: "Company CRM",
      description:
        "A robust company CRM system powered by React, Node, Express, and MongoDB. Manage data efficiently and securely.",
      Technology: ["React", "Node", "Express", "MongoDB"],
      github: "Private Repository",
      websiteLink: "https://www.dgmtcrm.online/",
    }
    
  ];

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <div className="portfolio-cards">
        {data.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <div className="portfolio-image">
              <img src={item.img} alt={item.project} />
            </div>
            <div className="portfolio-details">
              <h3>{item.project}</h3>
              <p>{item.description}</p>
              <ul>
                {item.Technology.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              <a
  href={item.github}
  target="_blank"
  rel="noopener noreferrer"
  className="portfolio-link"
>
  GitHub
</a>
<a
  href={item.websiteLink}
  target="_blank"
  rel="noopener noreferrer"
  className="portfolio-link"
>
  Website
</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
