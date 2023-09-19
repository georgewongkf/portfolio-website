import styles from "./ExperienceContent.module.css";
import ContentContainer from "../Content/ContentContainer";
import Content from "../Content/Content";
import TextSection from "../Content/TextSection";
import TextTitle from "../Content/TextTitle";
import TextDetail from "../Content/TextDetail";
import ImageSection from "../Content/ImageSection";
import Image from "../Content/Image";
import cyberportLogo from "../../assets/images/Cyberport-logo.png";
import hkuLogo from "../../assets/images/HKU-logo.png";

const ExperienceContent = () => {
  return (
    <ContentContainer pageStyle={styles.experience}>
      <Content pageStyle={styles.experienceContent}>
        <TextSection sectionStyle={styles.section}>
          <TextTitle>work experience</TextTitle>
          <TextDetail>
            Hong Kong Cyberport Management Company Limited
          </TextDetail>
          <TextDetail>from January 2021 to January 2022</TextDetail>
          <TextDetail>worked as a full-time Project Executive</TextDetail>
          <TextDetail>under ICT Operation Team</TextDetail>
        </TextSection>
        <ImageSection sectionStyle={styles.section}>
          <Image
            imageStyle={styles.imageOne}
            source={cyberportLogo}
            alternative="cyberportLogo"
          />
        </ImageSection>
      </Content>
      <Content pageStyle={styles.experienceContent}>
        <TextSection sectionStyle={styles.section}>
          <TextTitle>tertiary education</TextTitle>
          <TextDetail>The University of Hong Kong</TextDetail>
          <TextDetail>from 2017 to 2020</TextDetail>
          <TextDetail>graduated as a Bachelor of Social Sciences</TextDetail>
          <TextDetail>major in Sociology</TextDetail>
        </TextSection>
        <ImageSection sectionStyle={styles.section}>
          <Image
            imageStyle={styles.imageTwo}
            source={hkuLogo}
            alternative="hkuLogo"
          />
        </ImageSection>
      </Content>
    </ContentContainer>
  );
};

export default ExperienceContent;
