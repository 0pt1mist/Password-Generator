import { Header } from './components/header.jsx';
import { HeadInfo } from './components/head-info.jsx';
import { MainWin } from './components/main-app.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <HeadInfo />
      <MainWin />
    </div>
  );
}
export default App;

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}