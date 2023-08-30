import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div className="site-wrapper">
     <Header />
        <Main />
    </div>
  );
}

export default App;

