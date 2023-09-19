import styles from "./HomeContent.module.css";
import ContentContainer from "../Content/ContentContainer";
import Content from "../Content/Content";
import TextSection from "../Content/TextSection";
import TextDetail from "../Content/TextDetail";
import ImageSection from "../Content/ImageSection";
import Image from "../Content/Image";
import profileImage from "../../assets/images/Profile.jpg";

const HomeContent = () => {
  return (
    <ContentContainer pageStyle={styles.home}>
      <Content pageStyle={styles.homeContent}>
        <TextSection>
          <TextDetail>
            nice to meet you! Welcome to my portfolio website!
          </TextDetail>
          <TextDetail>
            this is George, Wong Kwai Fung, the creator of this website.
          </TextDetail>
          <TextDetail>
            being passionate, dedicated and well-prepared,
          </TextDetail>
          <TextDetail>
            i am currently seeking an opportunity for starting my web
            development
          </TextDetail>
          <TextDetail textStyle={styles.text}>
            career as a front-end developer!
          </TextDetail>
          <TextDetail>
            meanwhile, I am developing a cross-platform mobile application using
          </TextDetail>
          <TextDetail>
            React Native and also learning other front-end technologies.
          </TextDetail>
          <TextDetail>By the end of this website,</TextDetail>
          <TextDetail textStyle={styles.text}>
            hope you will have a better understanding of me!
          </TextDetail>
          <TextDetail>looking forward to working with you!</TextDetail>
        </TextSection>
        <ImageSection>
          <Image
            imageStyle={styles.image}
            pageStyle={styles.page}
            source={profileImage}
            alternative="profileImage"
          />
        </ImageSection>
      </Content>
    </ContentContainer>
  );
};

export default HomeContent;
