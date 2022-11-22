import './App.css';
import Header from "./header/header";

function App() {
  const state = {
    headerMessage: "영화 소개 프로젝트"
  };
  return (
    <div className="App">
      <Header headerMessage={state.headerMessage}/>

      <div>Main content</div>
    </div>
  );
}

export default App;
