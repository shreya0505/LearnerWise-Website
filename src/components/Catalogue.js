import React from 'react'
import { TagFill, EyeFill, CartPlusFill, ClockFill, ArrowClockwise, VectorPen, Translate, Search } from 'react-bootstrap-icons'
import Python from '../assets/python.jpg'
import WebD from '../assets/webd.jpg'
import PowerSystems from '../assets/powersystems.png'
import Biotech from '../assets/biotech.jpg'
import Mechanical from '../assets/mech.jpg'
import OrgChem from '../assets/orgchem.jpg'
const Catalogue = () => {
  return (
    <div>
        
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-bold">Course Hub</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
      </div>
    </div>

    <div class="input-group rounded">
    <input type="search" class="form-control rounded" placeholder="Learn something new..." aria-label="Search" aria-describedby="search-addon" />
    <span class="input-group-text border-0" id="search-addon">
        <Search/>
    </span>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img src={Python} style={{height:"225px"}}/>
            <div class="card-body" >
              <h3>Learn Python</h3>
              <p class="card-text">Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</p>
              
              <p><div> <VectorPen/> Created by Avinash Jain, The Codex</div> 
              <div><ArrowClockwise/> Last Updated 3/12/21</div>
              <div><Translate/> English, Hindi</div>
              <div><TagFill/> CSE, Python, Coding</div>
              </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-dark"> <EyeFill/>View</button>
                  <button type="button" class="btn btn-sm btn-outline-success"> <CartPlusFill/>  <b>₹760</b></button>
                </div>
                <small class="text-muted"><ClockFill /> 28 hours</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={WebD} style={{height:"225px"}}/>
            <div class="card-body">
              <h3>Learn HTML & CSS</h3>
              <p class="card-text">Learn A-Z everything about HTML and CSS, from the basics, to advanced topics like front end development and more!</p>
              
              <p><div> <VectorPen/> Created by Avinash Jain, The Codex</div> 
              <div><ArrowClockwise/> Last Updated 3/12/21</div>
              <div><Translate/> English, Hindi</div>
              <div><TagFill/> CSE, Python, Coding</div>
              </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-dark"> <EyeFill/>View</button>
                  <button type="button" class="btn btn-sm btn-outline-success"> <CartPlusFill/>  <b>₹760</b></button>
                </div>
                <small class="text-muted"><ClockFill /> 17 hour</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={Biotech} style={{height:"225px"}}/>

            <div class="card-body">
              <h3>Biological Chemistry	</h3>
              <p class="card-text">Making industrial processes more ecological and cost-effective and developing renewable raw materials is industrial biotechnology or chemical biotechnology.</p>
              
              <p><div> <VectorPen/> Created by Shobha Dey, Rich Jha</div> 
              <div><ArrowClockwise/> Last Updated 3/12/21</div>
              <div><Translate/> English, Hindi</div>
              <div><TagFill/> CSE, Python, Coding</div>
              </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-dark"> <EyeFill/>View</button>
                  <button type="button" class="btn btn-sm btn-outline-success"> <CartPlusFill/>  <b>₹760</b></button>
                </div>
                <small class="text-muted"><ClockFill /> 78 hour</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={PowerSystems} style={{height:"225px"}}/>
            <div class="card-body">
              <h3>Power Systems</h3>
              <p class="card-text">Calculations and simulations are performed to verify that the electrical system, including the system components, are correctly specified to perform as intended, withstand expected stress and be protected against failures.</p>
              
              <p><div> <VectorPen/> Created by Prakash Jain, Tarun Singh</div> 
              <div><ArrowClockwise/> Last Updated 3/12/21</div>
              <div><Translate/> English, Hindi</div>
              <div><TagFill/> CSE, Python, Coding</div>
              </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-dark"> <EyeFill/>View</button>
                  <button type="button" class="btn btn-sm btn-outline-success"> <CartPlusFill/>  <b>₹760</b></button>
                </div>
                <small class="text-muted"><ClockFill /> 78 hour</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={Mechanical} style={{height:"225px"}}/>
            <div class="card-body">
              <h3>Engineering Mechanics</h3>
              <p class="card-text">Engineering mechanics is the discipline devoted to the solution of mechanics problems through the integrated application of mathematical, scientific, and engineering principles. </p>
              
              <p><div> <VectorPen/> Created by K. Rathod, Garima Pathak</div> 
              <div><ArrowClockwise/> Last Updated 3/12/21</div>
              <div><Translate/> English, Hindi</div>
              <div><TagFill/> CSE, Python, Coding</div>
              </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-dark"> <EyeFill/>View</button>
                  <button type="button" class="btn btn-sm btn-outline-success"> <CartPlusFill/>  <b>₹760</b></button>
                </div>
                <small class="text-muted"><ClockFill /> 59 hour</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
<img src={OrgChem} style={{height:"225px"}}/>
            <div class="card-body">
              <h3>Organic Chemistry</h3>
              <p class="card-text">Organic chemistry is important because it is the study of life and all of the chemical reactions related to life. Organic chemistry is a branch of chemistry that studies the structure, properties and reactions of organic compounds.</p>
              
              <p><div> <VectorPen/> Created by Avinash Jain, The Codex</div> 
              <div><ArrowClockwise/> Last Updated 3/12/21</div>
              <div><Translate/> English, Hindi</div>
              <div><TagFill/> CSE, Python, Coding</div>
              </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-dark"> <EyeFill/>View</button>
                  <button type="button" class="btn btn-sm btn-outline-success"> <CartPlusFill/>  <b>₹760</b></button>
                </div>
                <small class="text-muted"><ClockFill /> 10 hour</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

  )
}

export default Catalogue