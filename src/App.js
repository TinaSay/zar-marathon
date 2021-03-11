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
            <Layout urlBg={bg} title='This is title' descr='This is description'/>
            <Layout colorBg='#a05656' title='This is title' descr='This is description'/>
            <Layout urlBg={bgTrees} title='This is title' descr='This is description'/>
            <Footer/>

        </div>
    );
};

export default App;
