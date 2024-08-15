import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import { FaCheckCircle, FaUsers, FaMapMarkerAlt, FaCogs } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCheckCircle color="#4CAF50" />, // Green for Quality Assurance
      title: "Quality Assurance",
      subtitle:
        "We enforce the strictest quality checks at every stage to ensure top-notch products that meet the highest industry standards.",
    },
    {
      icon: <FaUsers color="#2196F3" />, // Blue for Great Team Workers
      title: "Great Team Workers",
      subtitle:
        "Our dedicated team of skilled professionals collaborates effectively to deliver outstanding results on every project.",
    },
    {
      icon: <FaMapMarkerAlt color="#FF5722" />, // Orange for Amazing Infrastructure
      title: "Amazing Infrastructure",
      subtitle:
        "Located in Bawana, our state-of-the-art facility is equipped to handle large-scale manufacturing with precision and efficiency.",
    },
    {
      icon: <FaCogs color="#9C27B0" />, // Purple for Cutting-Edge Machines
      title: "Cutting-Edge Machines",
      subtitle:
        "Our facility is outfitted with the latest machines, ensuring high precision, efficiency, and product consistency.",
    },
  ];

  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Why We Are The Best?</h1>
            <p className="font13">
              Sri Sai Enterprises stands out as a leader in granules
              manufacturing due to our unwavering commitment to quality,
              cutting-edge production techniques, and rigorous quality control
              processes. We ensure that each batch of granules meets the highest
              standards, delivering superior consistency and performance, making
              us the preferred choice for manufacturers seeking reliability and
              excellence.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            {services.map((service, index) => (
              <ServiceBoxWrapper key={service.title}>
                <ServiceBox
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                />
              </ServiceBoxWrapper>
            ))}
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
