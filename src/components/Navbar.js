import React from 'react'
import { Pencil } from 'react-bootstrap-icons'
const Navbar = () => {
  return (
    <header class="site-header sticky-top py-1">
        <nav class="container d-flex flex-column flex-md-row justify-content-between">
            <a class="py-2" href="/" aria-label="Product"> 
            <Pencil width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>LearnerWise</title></Pencil>
            </a>
            <a class="py-2 d-none d-md-inline-block" href="/dashboard" style={{textDecoration:"none"}}>Home</a>
            <a class="py-2 d-none d-md-inline-block" href="/chatbot" style={{textDecoration:"none"}}>Chat</a>
            <a class="py-2 d-none d-md-inline-block" href="/joinus" style={{textDecoration:"none"}}>Join Us</a>
            <a class="py-2 d-none d-md-inline-block" href="/" style={{textDecoration:"none"}}>Contact</a>
        </nav>
</header>
  )
}

export default Navbar