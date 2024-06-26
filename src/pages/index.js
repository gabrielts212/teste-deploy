import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Plans from "../components/plans/Plans";
import Form from "../components/form/Form";
import Circulecards from "../components/circulecards/Circulecards";
import GreatWork from "../components/greatwork/Greatwork";
import Principalpage from "../components/principalpage/Principalpage";

export default function Home() {
  return (
    <div>
      <Header />
      <Principalpage />
      <GreatWork/>
      <Circulecards />
      <Form />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}