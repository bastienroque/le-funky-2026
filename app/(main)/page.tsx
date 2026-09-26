import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import { Section } from "@/components/ui/Section";

const Home = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <About />
      </Section>
    </>
  );
};

export default Home;
