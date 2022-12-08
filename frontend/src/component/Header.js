import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  // const [scrolled, setScrolled] = useState(false)

  // const handleScroll = () => {
  //   const offset = window.scrollY
  //   if (offset > 90) {
  //     setScrolled(true)
  //   } else {
  //     setScrolled(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)
  // })
  // let navbarClasses = [""]
  // if (scrolled) {
  //   navbarClasses.push("scrolled")
  // }

  return (
   <header className="header">
     <Navbar collapseOnSelect expand='lg' sticky="top" id='nav'>
      <Navbar.Brand href='#home'>
       Land Registry
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav id='nav__item' className='m-auto'>
          <Nav.Link href='#features'>Home</Nav.Link>
          <Nav.Link href='#features'>User</Nav.Link>
          <Nav.Link href='#pricing'>Land Registry</Nav.Link>
          <Nav.Link href='#features'>About </Nav.Link>
        </Nav>      
      </Navbar.Collapse>
    </Navbar>
   </header>
  )
}

export default Header
