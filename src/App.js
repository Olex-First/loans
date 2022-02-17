import './App.scss';
import MainPage from "./components/mainPage/mainPage";
import 'antd/dist/antd.min.css';


function App() {
  return (
    <div className="App">
        <MainPage pageTitle="Current Loans" />
    </div>
  );
}

export default App;
