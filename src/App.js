import Header from './Components/Header';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import bg from './img/bg1.jpg';
import bgTrees from './img/Trees.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header title='This is title' descr='This is description'/>
            <Layout urlBg={bg}/>
            <Layout colorBg='#a05656'/>
            <Layout urlBg={bgTrees}/>
            <Footer/>

        </div>
    );
};

export default App;
