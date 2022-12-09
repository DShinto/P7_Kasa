import Header from "./components/header/Header";
import Routerpages from "./Routerpages";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="main-container">
        <Routerpages />
      </main>
      <Footer />
    </div>
  );
}

export default App;
