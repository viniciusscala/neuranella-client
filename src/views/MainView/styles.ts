import styled from 'styled-components';

const margin = '30px';

export const Container = styled.section`
  background-color: #D7E4F3;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr ${margin} 8fr ${margin};
  grid-template-rows: 1.5fr ${margin} 8.5fr;

  & > * {
    margin: 0;
    -webkit-box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.15); 
    box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.15);
  }
`;

export const SideBar = styled.aside`
  background-color: white;
  width: 100%;
  height: 100%;
  grid-column: 1;
  grid-row: 1/4;
`;

export const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1890FF;
  font-size: 3vw;
  text-align: center;
`;

export const TopMenu = styled.menu`
  background-color: white;
  width: 100%;
  height: 100%;
  grid-column: 3;
  grid-row: 1;
  display: grid;
  grid-template-columns: 2fr 2.5fr 2fr 1fr;
  padding: 20px;
`;

export const TopMenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
`;

export const TopMenuSectionTitle = styled.h2`
  color: black;
  font-size: 1.5vw;
`;

export const SwitchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SliderContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 8fr 1fr;
`;

export const Graphs = styled.section`
  background-color: white;
  width: 100%;
  height: 100%;
  grid-column: 3;
  grid-row: 3;
`;
