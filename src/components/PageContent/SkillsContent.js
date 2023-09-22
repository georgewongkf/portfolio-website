import styles from "./SkillsContent.module.css";
import ContentContainer from "../Content/ContentContainer";
import Content from "../Content/Content";
import TextSection from "../Content/TextSection";
import TextTitle from "../Content/TextTitle";
import TextDetail from "../Content/TextDetail";
import ImageSection from "../Content/ImageSection";
import Image from "../Content/Image";
import htmlLogo from "../../assets/images/HTML-logo.svg";
import cssLogo from "../../assets/images/CSS-logo.svg";
import javascriptLogo from "../../assets/images/JavaScript-logo.svg";
import reactLogo from "../../assets/images/React-logo.svg";
import problemSolvingLogo from "../../assets/images/Problem-solving-logo.svg";
import figmaLogo from "../../assets/images/Figma-logo.svg";
import colorTheoryLogo from "../../assets/images/Color-theory-logo.svg";
import typographyLogo from "../../assets/images/Typography-logo.svg";
import languageImage from "../../assets/images/Language.svg";
import wordLogo from "../../assets/images/Word-logo.svg";
import powerPointLogo from "../../assets/images/PowerPoint-logo.svg";
import excelLogo from "../../assets/images/Excel-logo.svg";
import typingImage from "../../assets/images/Typing.svg";

const SkillsContent = () => {
  return (
    <ContentContainer pageStyle={styles.skills}>
      <Content pageStyle={styles.skillsContent}>
        <TextSection sectionStyle={styles.section}>
          <TextTitle>front-end web development</TextTitle>
          <TextDetail>HTML, CSS, JavaScript and React.js</TextDetail>
          <TextTitle>programming & web design</TextTitle>
          <TextDetail>problem-solving, Testing, Debugging</TextDetail>
          <TextDetail>Figma, Wireframing, Color Theory, Typography</TextDetail>
        </TextSection>
        <ImageSection sectionStyle={styles.imageSection}>
          <Image
            imageStyle={styles.imageOne}
            source={htmlLogo}
            alternative="htmlLogo"
          />
          <Image
            imageStyle={styles.imageOne}
            source={cssLogo}
            alternative="cssLogo"
          />
          <Image
            imageStyle={styles.imageTwo}
            source={javascriptLogo}
            alternative="javascriptLogo"
          />
          <Image
            imageStyle={styles.imageTwo}
            source={reactLogo}
            alternative="reactLogo"
          />
          <Image
            imageStyle={styles.imageOne}
            source={problemSolvingLogo}
            alternative="problemSolvingLogo"
          />
          <Image
            imageStyle={styles.imageTwo}
            source={figmaLogo}
            alternative="figmaLogo"
          />
          <Image
            imageStyle={styles.imageOne}
            source={colorTheoryLogo}
            alternative="colorTheoryLogo"
          />
          <Image
            imageStyle={styles.imageOne}
            source={typographyLogo}
            alternative="typographyLogo"
          />
        </ImageSection>
      </Content>
      <Content pageStyle={styles.skillsContent}>
        <TextSection sectionStyle={styles.section}>
          <TextTitle>language</TextTitle>
          <TextDetail>English and Chinese (written and spoken) </TextDetail>
          <TextTitle>computer literacy</TextTitle>
          <TextDetail>Microsoft Office (Word, PowerPoint and Excel)</TextDetail>
          <TextDetail>English typing and Chinese typing</TextDetail>
        </TextSection>
        <ImageSection sectionStyle={styles.imageSection}>
          <Image
            imageStyle={styles.imageOne}
            source={languageImage}
            alternative="languageImage"
          />
          <Image
            imageStyle={styles.imageOne}
            source={wordLogo}
            alternative="wordLogo"
          />
          <Image
            imageStyle={styles.imageOne}
            source={powerPointLogo}
            alternative="powerPointLogo"
          />
          <Image
            imageStyle={styles.imageOne}
            source={excelLogo}
            alternative="excelLogo"
          />
          <Image
            imageStyle={styles.imageOne}
            source={typingImage}
            alternative="typingImage"
          />
        </ImageSection>
      </Content>
    </ContentContainer>
  );
};

export default SkillsContent;
