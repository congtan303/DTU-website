import './App.css';
import Footer from './components/Footer/Footer';
import MenuRepository from './components/MenuRepository/MenuRepository';
import TopHeader from './components/TopHeader/TopHeader';
import TopMenu from './components/TopMenu/TopMenu';

function App() {
  return (
    <div className="App">
        <TopHeader />
        <TopMenu />
        <MenuRepository />
        <Footer/> 
    </div>
  );
}

export default App;
