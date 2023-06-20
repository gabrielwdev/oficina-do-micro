import Header from "./assets/components/Header";
import Div from "./assets/components/Div";
import Aside from "./assets/components/Header";
import StnServicos from "./assets/components/StnServicos";
import StnProcessos from "./assets/components/StnProcessos";
import StnCTA from "./assets/components/StnCTA";
import StnSobre from "./assets/components/StnSobre";
import StnFeedbaks from "./assets/components/StnFeedbacks";
import StnContato from "./assets/components/StnContato";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Div />
        <Aside />
      </main>
      <StnServicos />
      <StnProcessos />
      <StnCTA />
      <StnSobre />
      <StnFeedbaks />
      <StnContato />
      <Footer />
    </>
  );
}

export default App;
