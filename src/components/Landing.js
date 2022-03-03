import React from 'react'
import LandingImage from '../assets/LandingImage.jpg'
import { PersonCheckFill,PersonPlusFill } from 'react-bootstrap-icons'

const Landing = () => {
  return (
    <div>
    <div>
        <img src={LandingImage} class="img-fluid" alt="..."></img>
        <button class="landingButton btn-group">         
        <button type="button" class="btn btn-secondary"> <PersonCheckFill
         size={'15px'}/> &nbsp; <a href="/signin" style={{textDecoration:"none", color: "white"}}> Sign In </a></button>
        <button type="button" class="btn btn-secondary"> <PersonPlusFill
         size={'15px'}/> &nbsp; <a href="/signup" style={{textDecoration:"none", color: "white"}}> Sign Up </a> </button>
        </button>
        
    </div>
    
    
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">LeanerWise</h1>
        <p class="lead fw-normal">Making Education Easy and Accessible</p>
        <a class="btn btn-outline-secondary" href="/chatbot">Chat With Us</a>
        <a class="btn btn-outline-secondary" href="/joinus" style={{marginLeft:"10px"}}>Join Us</a>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Live Tuitions</h2>
        <p class="lead">Connect with the best knowledge experts from the comfort of home.</p>
      </div>
      {/* <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div> */}
    </div>
    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5"> Online Courses </h2>
        <p class="lead"> Access a wide range of courses by trusted subject experts.</p>
      </div>
      {/* <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div> */}
    </div>
  </div>

  <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">Homework Help</h2>
        <p class="lead">Get help for tough assignments and reference book solutions</p>
      </div>
      {/* <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div> */}
    </div>
    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">No Subscription</h2>
        <p class="lead">Pay only what you want access for with guaranteed minimum prices.</p>
      </div>
      {/* <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div> */}
    </div>
  </div>
    
</div>
  
  )
}

export default Landing