import './App.css';
import Header from "./header/header";
import styled from "styled-components";

function App() {
  const state = {
    headerMessage: "영화 소개 프로젝트"
  };
  return (
    <div className="App">
      <Header headerMessage={state.headerMessage}/>

      <div>Main content</div>
      <StyledDiv />
    </div>
  );
}

const StyledDiv = styled.div`
  
`;

export default App;
