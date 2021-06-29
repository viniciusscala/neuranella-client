import styled from 'styled-components';

export const Container = styled.section`
  background-color: #cccccc;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 50vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
