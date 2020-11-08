import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/avatar.png';
import todo from '../assets/todo.png';
import { asyncPrint } from '../utils';

const Container = styled.div`
  color: #f00;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px;
`;

const Button = styled.button`
  width: 100px;
  font-size: 20px;
  margin: 10px 0;
  color: red;
`;

const Home: React.FC = () => {
  const handleClick = () => {
    window.alert('clicked');
    setTimeout(() => {
      console.log('test es6');
    }, 2000);
  };

  asyncPrint();

  return (
    <Container>
      <Button onClick={handleClick}>click me</Button>
      <div>
        <img src={avatar} width="64" height="64" alt="logo" />
        <img src={todo} />
      </div>
    </Container>
  );
};

export default Home;
