import React from "react";
import styled from "styled-components";
// Components
import ProductBox from "../Elements/ProductBox";
// Assets
import ProductImg11 from "../../assets/img/products/1.png";
import ProductImg12 from "../../assets/img/products/2.png";
import ProductImg13 from "../../assets/img/products/3.png";
import ProductImg14 from "../../assets/img/products/4.png";
import ProductImg15 from "../../assets/img/products/5.png";
import ProductImg16 from "../../assets/img/products/6.png";
import AboutUs from "./AboutUs";

const ProductItem = ({ img, title, text, onClick }) => (
  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    <ProductBox img={img} title={title} text={text} action={onClick} />
  </div>
);
const productData = [
  {
    img: ProductImg11,
    title: "Polyethylene Granules",
    text: "Premium polyethylene granules offering excellent flexibility and chemical resistance, suitable for a wide range of plastic manufacturing processes, including film extrusion and blow molding.",
  },
  {
    img: ProductImg12,
    title: "ABS Granules",
    text: "High-impact ABS granules with superior toughness and rigidity, perfect for producing durable and aesthetically appealing products like automotive parts and consumer electronics.",
  },
  {
    img: ProductImg13,
    title: "TPE Granules",
    text: "Versatile TPE granules providing the perfect balance of elasticity and strength, ideal for creating soft-touch and ergonomic products, including medical devices and automotive components.",
  },
  {
    img: ProductImg14,
    title: "PPCP Granules",
    text: "High-performance PPCP granules engineered for applications requiring excellent chemical resistance and thermal stability, widely used in packaging and automotive industries.",
  },
  {
    img: ProductImg15,
    title: "Polycarbonate Granules",
    text: "Optically clear and highly durable polycarbonate granules, ideal for manufacturing high-impact products like lenses, eyewear, and protective gear.",
  },
  {
    img: ProductImg16,
    title: "HM Granules",
    text: "High-density HM granules offering exceptional stiffness and environmental stress crack resistance, commonly used in the production of strong and durable plastic films and containers.",
  },
];

export default function Products() {
  return (
    <Wrapper>
      <AboutUs />
      <div className="whiteBg" id="products">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Products</h1>
            <p className="font13">
              Sri Sai Enterprises specializes in providing a comprehensive
              selection of premium plastic granules, catering to diverse
              industrial requirements. Our products are known for their
              exceptional quality, consistency, and performance, ensuring that
              your manufacturing processes run smoothly and efficiently.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            {productData.slice(0, 3).map((product, index) => (
              <ProductItem
                key={index}
                img={product.img}
                title={product.title}
                text={product.text}
                onClick={() => alert(`clicked on ${product.title}`)}
              />
            ))}
          </div>
          <div className="row textCenter">
            {productData.slice(3).map((product, index) => (
              <ProductItem
                key={index}
                img={product.img}
                title={product.title}
                text={product.text}
                onClick={() => alert(`clicked on ${product.title}`)}
              />
            ))}
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
