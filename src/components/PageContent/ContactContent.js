import styles from "./ContactContent.module.css";
import ContentContainer from "../Content/ContentContainer";
import Content from "../Content/Content";
import TextSection from "../Content/TextSection";
import TextTitle from "../Content/TextTitle";
import TextDetail from "../Content/TextDetail";
import ImageSection from "../Content/ImageSection";
import Image from "../Content/Image";
import contactImage from "../../assets/images/Contact.jpg";

const ContactContent = () => {
  return (
    <ContentContainer pageStyle={styles.contact}>
      <Content pageStyle={styles.contactContent}>
        <TextSection sectionStyle={styles.section}>
          <TextTitle>Email</TextTitle>
          <TextDetail textStyle={styles.text}>
            georgewongkf@gmail.com
          </TextDetail>
          <TextTitle>LinkedIn</TextTitle>
          <TextDetail textStyle={styles.text}>
            <a
              href="https://linkedin.com/in/georgewongkf"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/georgewongkf
            </a>
          </TextDetail>
          <TextTitle>Contact Number</TextTitle>
          <TextDetail>
            please refer to the contact number in the resume
          </TextDetail>
          <TextTitle>Location</TextTitle>
          <TextDetail>Hong Kong</TextDetail>
        </TextSection>
        <ImageSection sectionStyle={styles.section}>
          <Image
            imageStyle={styles.image}
            pageStyle={styles.page}
            source={contactImage}
            alt="contactImage"
          />
        </ImageSection>
      </Content>
    </ContentContainer>
  );
};

export default ContactContent;
