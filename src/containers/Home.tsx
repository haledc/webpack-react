import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: #f00;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px;
`

const Button = styled.button`
  width: 100px;
  font-size: 20px;
  margin: 10px 0;
  color: red;
`

const Home: React.FC = () => {
  const handleClick = () => {
    window.alert('clicked')
    setTimeout(() => {
      console.log('test es6')
    }, 2000)
  }

  return (
    <Container>
      <Button onClick={handleClick}>click me</Button>
      <div>
        <img
          src={require('../assets/avatar.png')}
          width="64"
          height="64"
          alt="logo"
        />
        <img src={require('../assets/todo.png')} />
      </div>
    </Container>
  )
}

export default Home
