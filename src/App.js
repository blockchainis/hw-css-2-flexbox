import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const SideBar = styled.div`
  width: 200px;
  height: 600px;
  background-color: antiquewhite;
`;

const Footer = styled.footer`
  width: 800px;
  height: 100px;
  background-color: teal;
`;

const Main = styled.main`
  width: 600px;
  height: 600px;
  background-color: purple;
`;

const Navigator = styled.div`
  height: 100px;
  width: 800px;
  background-color: aquamarine;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navigator>네비게이터</Navigator>
        <SideBar>사이드바</SideBar>
        <Main>메인</Main>
        <Footer>푸터</Footer>
      </Container>
    </>
  );
}

export default App;
