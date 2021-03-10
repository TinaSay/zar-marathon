import Header from './Components/Header';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import bg from './img/bg1.jpg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header title='This is title' descr='This is description'/>
            <Layout urlBg={bg}/>
            <Layout colorBg='#334b80'/>
            <Layout urlBg={bg}/>
            <Footer/>

        </div>
    );
};

export default App;
