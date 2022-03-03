import React from 'react'
import Logo from '../assets/Logo.JPG'
import { Pencil } from 'react-bootstrap-icons'
const Footer = () => {
  return (
    <footer class="container py-5">
  <div class="row">
    <div class="col-12 col-md">
      
      <h4 style={{fontWeight: "100px"}}><b><Pencil  width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2 "  viewBox="0 0 24 24"><title>Product</title></Pencil>LearnerWise</b></h4>
      <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
    </div>
    <div class="col-6 col-md">
      <h5>Quick Links</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Profile</a></li>
        <li><a class="link-secondary" href="#">Courses</a></li>
        <li><a class="link-secondary" href="#">Homework Help</a></li>
        <li><a class="link-secondary" href="#">Tuitions</a></li>
        <li><a class="link-secondary" href="#">Study Material</a></li>
      </ul>
    </div>
 
    <div class="col-6 col-md">
      <h5>Contact</h5>
      <ul class="list-unstyled text-small">
        <p>Address: NH 62, Surpura Bypass Rd, Karwar, Rajasthan 342030 <div>Phone: 0291 280 1076</div></p>
      </ul>
    </div>
  </div>
</footer>

  )
}

export default Footer