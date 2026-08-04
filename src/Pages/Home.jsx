import Header from "../component/Header";
import About from "../component/About";
import Skills from "../component/Skills";

function Home() {

  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <>
      <Header name="Krisha" themeColor="lightblue" />
      <About />
      <Skills skillList={skills} />
    </>
  );
}

export default Home;