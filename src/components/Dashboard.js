import React from 'react'
import { PencilSquare, HourglassSplit} from 'react-bootstrap-icons'
const Dashboard = () => {
  return (
    <div>  
        <div class="container py-4">

    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Hi Student,</h1>
        <p class="col-md-8 fs-4"> This is your dashboard. You will find all your study materials here. You can book a session with our knowlege experts and ask doubts, get home work help or learn a topic from scratch.</p>
        <button style={{margin:"10px"}} class="btn btn-dark btn-lg" type="button" > <a href='/doubtpayment' style={{textDecoration:"none", color:"white"}}> Doubt Session </a> </button>
        <button style={{margin:"10px"}} class="btn btn-dark btn-lg" type="button" > <a href='/homeworkpayment' style={{textDecoration:"none", color:"white"}}> Homework Help </a></button>
        <button style={{margin:"10px"}} class="btn btn-dark btn-lg" type="button"><a href='/tuitionpayment' style={{textDecoration:"none", color:"white"}}> Tuition Session </a></button>
      </div>
    </div>
    
    <h1 class="display-5 fw-bold">Study Portal</h1>
    <hr class="my-4"/>
    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Enrolled Courses</h2>
          <p> 
             <div> Enrolled in 5 courses.</div> 
             <div>  89 hours of lectures remaining.</div>
             <div>  10 notifications on forum </div>
             <div class="progress" style={{marginTop:"10px"}}>
                <div class="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
          </p>
          <button class="btn btn-outline-light" type="button"><a href='/courseslist' style={{textDecoration:"none", color:"white"}}> Explore Courses </a></button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Study Material</h2>
          <p> 
              <div>Find all your notes, recorded lectures, homework solutions, and forum threads here. </div>
              <div><b>2 Lecture Notes</b></div>
              <div><b>4 Lecture Recordings</b></div>
              <div><b>5 Homework Solutions</b></div>
              </p>

          <button class="btn btn-outline-dark" type="button"><a href='/studymaterial' style={{textDecoration:"none", color:"black"}}> Explore Study Material </a></button>
        </div>
      </div>
      
    </div>

    <footer class="pt-3 mt-4 text-muted border-top">
      &copy; 2021
    </footer>
  </div>
  </div>
  )
}

export default Dashboard