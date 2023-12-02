import React from 'react'
import {Col, Row,Container} from 'react-bootstrap'
import './Home.css'


import Banner from '../Components/Banner';
import Rowpost from '../Components/Rowpost';

function Home() {
  
  return (
  <>
      <div className='d-none d-md-block banner'>  <Banner/></div>
      <Container>
       <Rowpost/>
      </Container>
  </>
  )
}

export default Home