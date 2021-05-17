import Footer from "./components/Footer"
import Header from "./components/Header";
import Main from "./components/Main";
import './styles/App.css';

const App = () => {
  return (
    <div id='App'>
      <Header title={'Library'} />
      <Main />
      <Footer address={'https://github.com/robisonwebdev'} name={'David Robison'} />
    </div>
  );
}

export default App;