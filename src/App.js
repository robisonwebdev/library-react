import Footer from "./components/Footer"
import Header from "./components/Header";
import Main from "./components/Main";
import './styles/App.css';

const App = () => {
  return (
    <div id='App'>
      <Header title={'Library'} />
      <Main />
      <Footer name={'David Robison'} />
    </div>
  );
}

export default App;