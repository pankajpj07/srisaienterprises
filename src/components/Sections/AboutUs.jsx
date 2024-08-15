import AddImage2 from "../../assets/img/add/add2.png";
import { companyName, makePhoneCall } from "../../utils/constants";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";

export default function AboutUs() {
  return (
    <div className="lightBg" id="about-us">
      <div className="container">
        <Advertising className="flexSpaceCenter">
          <AddLeft>
            <AddLeftInner>
              <ImgWrapper className="flexCenter">
                <img className="radius8" src={AddImage2} alt="add" />
              </ImgWrapper>
            </AddLeftInner>
          </AddLeft>
          <AddRight>
            <h4 className="font15 semiBold">A few words about company</h4>
            <h2 className="font40 extraBold">{companyName}</h2>
            <p className="font12">
              {companyName} has emerged as one of the fastest growing Plastic
              Granules Manufacturers and Suppliers in India. We are engaged in
              offering Plastic Raw Material and Reprocessed Plastic Granules
              such as Polyethylene Granules, Polypropylene Granules, PPCP
              Granules, ABS Granules, Polycarbonate Granules, TPE Granules and
              Recycled Plastic Granules.
            </p>
            <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
              <div style={{ width: "190px" }}>
                <FullButton title="Call Us" action={() => makePhoneCall()} />
              </div>
            </ButtonsRow>
          </AddRight>
        </Advertising>
      </div>
    </div>
  );
}

const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
