import Header from './Components/Header';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import logo from './img/bg1.jpg';
import './App.css';

const App=()=> {
  return (
    <div className="App">
      <Header title='This is title' descr='This is description' />
      <Layout urlBg={logo} />
      <Layout colorBg='red' />
      <Layout urlBg={logo} />
      <Footer />

    </div>
  );
};

export default App;
