import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
         <Link to={'/'} style={{textDecoration:'none'}}>
         <Navbar.Brand href="" className=' fw-bolder text-light'>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZr87FUZdgr-MBGZFgzVY3iQrZy62J-i_0g&s"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           MX Player
          </Navbar.Brand>
         </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
