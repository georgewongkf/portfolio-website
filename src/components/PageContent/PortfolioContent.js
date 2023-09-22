import styles from "./PortfolioContent.module.css";
import ContentContainer from "../Content/ContentContainer";
import Content from "../Content/Content";
import TextSection from "../Content/TextSection";
import TextTitle from "../Content/TextTitle";
import TextDetail from "../Content/TextDetail";
import ImageSection from "../Content/ImageSection";
import Image from "../Content/Image";
import portfolioOneLogo from "../../assets/images/GWKF.png";
import portfolioTwoLogo from "../../assets/images/E-commerce-logo.png";

const PortfolioContent = () => {
  return (
    <ContentContainer pageStyle={styles.portfolio}>
      <Content pageStyle={styles.portfolioContent}>
        <TextSection>
          <TextTitle>1. porfolio website (currently visiting)</TextTitle>
        </TextSection>
        <ImageSection sectionStyle={styles.imageSection}>
          <Image
            imageStyle={styles.portfolioImage}
            source={portfolioOneLogo}
            alternative="portfolioOneLogo"
          />
        </ImageSection>
        <TextSection>
          <TextDetail>
            Visit:&nbsp;
            <a
              href="https://georgewongkwaifung.web.app"
              target="_blank"
              rel="noreferrer"
            >
              georgewongkwaifung.web.app
            </a>
          </TextDetail>
          <TextTitle>features:</TextTitle>
          <TextDetail>Responsive Design, Single-Page Application</TextDetail>
          <TextTitle>technologies applied:</TextTitle>
          <TextDetail>React ecosystem (React.js and React Router)</TextDetail>
        </TextSection>
      </Content>
      <Content pageStyle={styles.portfolioContent}>
        <TextSection>
          <TextTitle>2. e-commerce website</TextTitle>
        </TextSection>
        <ImageSection sectionStyle={styles.imageSection}>
          <Image
            imageStyle={styles.portfolioImage}
            source={portfolioTwoLogo}
            alternative="portfolioTwoLogo"
          />
        </ImageSection>
        <TextSection>
          <TextDetail>
            Visit:&nbsp;
            <a
              href="https://ecommercegwkf.web.app"
              target="_blank"
              rel="noreferrer"
            >
              ecommercegwkf.web.app
            </a>
          </TextDetail>
          <TextDetail></TextDetail>
          <TextTitle>features:</TextTitle>
          <TextDetail>Authentication, Content Management</TextDetail>
          <TextTitle>technologies applied:</TextTitle>
          <TextDetail>
            React ecosystem (React.js, React Router and React Redux)
          </TextDetail>
        </TextSection>
      </Content>
    </ContentContainer>
  );
};

export default PortfolioContent;
