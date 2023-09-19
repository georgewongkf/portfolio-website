import BodyContainer from "../components/Body/BodyContainer";
import Heading from "../components/Body/Heading";
import HomeContent from "../components/PageContent/HomeContent";

const Home = () => {
  return (
    <>
      <BodyContainer>
        <Heading>Home</Heading>
        <HomeContent />
      </BodyContainer>
    </>
  );
};

export default Home;
