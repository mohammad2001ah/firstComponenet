import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Container from './component/Container';
import Footer from './component/Footer';
import './component/Header/style.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
