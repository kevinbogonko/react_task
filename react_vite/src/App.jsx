import  Navbar from './components/navbar'
import styled from 'styled-components'
import './App.css'

function App() {

  return (
    <Wrapper>
    <Navbar />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #edede9;
`
