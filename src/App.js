import Footer from "./components/Footer"
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Header title={'Library'} />
      <Main />
      <Footer name={'David Robison'} />
    </div>
  );
}

export default App;