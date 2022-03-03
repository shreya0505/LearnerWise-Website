import React from 'react';

function CoursesList() {
	return (
		<div class="container" style={{marginTop:"30px"}}>
			
			<h1 class='display-5 fw-bold'>My Courses</h1>
			<p class="col-md-12 fs-4"> Start learning where you left off or revise to see if you remember what you learnt.</p>
			<div class='row align-items-md-stretch' style={{marginTop:"20px"}}>
				
                <div class='col-md-6' style={{marginTop:"10px"}}>
					<div class='h-100 p-5 text-white bg-dark rounded-3'>
						<h2>Learning Python</h2>
						<p>
							<div> 89 hours of lectures remaining.</div>
							<div> <span class="badge badge-danger">9</span> notifications on forum </div>
							<div class='progress' style={{ marginTop: '10px' }}>
								<div
									class='progress-bar bg-warning'
									role='progressbar'
									style={{ width: '65%' }}
									aria-valuenow='65'
									aria-valuemin='0'
									aria-valuemax='100'>
									65%
								</div>
							</div>
						</p>
						<button class='btn btn-outline-light' type='button'>
							Start Learning
						</button>
					</div>
				</div>

                <div class='col-md-6' style={{marginTop:"10px"}}>
					<div class='h-100 p-5 text-white bg-dark rounded-3'>
						<h2>Biochemical Engineering</h2>
						<p>
							<div> 130 hours of lectures remaining.</div>
							<div> <b> 3</b> notifications on forum </div>
							<div class='progress' style={{ marginTop: '10px' }}>
								<div
									class='progress-bar bg-warning'
									role='progressbar'
									style={{ width: '35%' }}
									aria-valuenow='35'
									aria-valuemin='0'
									aria-valuemax='100'>
									35%
								</div>
							</div>
						</p>
						<button class='btn btn-outline-light' type='button'>
							Start Learning
						</button>
					</div>
				</div>

                <div class='col-md-6' style={{marginTop:"10px"}}>
					<div class='h-100 p-5 text-white bg-dark rounded-3' >
						<h2>Basic Electrical Engineering</h2>
						<p>
							<div> 10 hours of lectures remaining.</div>
							<div> <b> 3</b> notifications on forum </div>
							<div class='progress' style={{ marginTop: '10px' }}>
								<div
									class='progress-bar bg-warning'
									role='progressbar'
									style={{ width: '95%' }}
									aria-valuenow='35'
									aria-valuemin='0'
									aria-valuemax='100'>
									95%
								</div>
							</div>
						</p>
						<button class='btn btn-outline-light' type='button'>
							Start Learning
						</button>
					</div>
				</div>

                <div class='col-md-6' style={{marginTop:"10px"}}>
					<div class='h-100 p-5 text-white bg-dark rounded-3' >
						<h2>Organic Chemistry</h2>
						<p>
							<div> Completed </div>
							<div> <span class="badge badge-danger">19</span> notifications on forum </div>
							<div class='progress' style={{ marginTop: '10px' }}>
								<div
									class='progress-bar bg-warning'
									role='progressbar'
									style={{ width: '100%' }}
									aria-valuenow='100'
									aria-valuemin='0'
									aria-valuemax='100'>
									100%
								</div>
							</div>
						</p>
						<button class='btn btn-outline-light' type='button'>
							Start Revising
						</button>
					</div>
				</div>

                <div class='col-md-6' style={{marginTop:"10px"}}>
					<div class='h-100 p-5 text-white bg-dark rounded-3' >
						<h2> Data Structures and Algorithm</h2>
						<p>
							<div> 20 hours of lectures remaining.</div>
							<div> <span class="badge badge-danger">60</span> notifications on forum </div>
							<div class='progress' style={{ marginTop: '10px' }}>
								<div
									class='progress-bar bg-warning'
									role='progressbar'
									style={{ width: '90%' }}
									aria-valuenow='65'
									aria-valuemin='0'
									aria-valuemax='100'>
									90%
								</div>
							</div>
						</p>
						<button class='btn btn-outline-light' type='button'>
							Start Learning
						</button>
					</div>
				</div>

			
			</div>
		</div>
	);
}

export default CoursesList;
