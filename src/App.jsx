import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col h-screen bg-slate-800 text-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
