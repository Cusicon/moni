import './styles/App.css';
import SideBar from './components/SideBar';
import MainBody from './containers/MainBody';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <SideBar />
      <MainBody />
    </div>
  );
}

export default App;
