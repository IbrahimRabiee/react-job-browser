import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobLists from "../components/JobLists";
import ViewAll from "../components/ViewAll";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobLists isHome={true} />
      <ViewAll />
    </>
  );
};

export default HomePage;
