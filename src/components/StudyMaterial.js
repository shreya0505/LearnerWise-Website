import React from 'react';
import { Search } from 'react-bootstrap-icons';
const StudyMaterial = () => {
	return (
		<div>
            
			<div class='container' style={{ marginTop: '30px', marginBottom: "30px" }}>
            <div class="input-group rounded">
            
    <input type="search" class="form-control rounded" placeholder="Search your repository..." aria-label="Search" aria-describedby="search-addon" />
    <span class="input-group-text border-0" id="search-addon">
        <Search/>
    </span>
    </div>
                <h1 class='display-5 fw-bold' style={{ marginTop: '30px'}}>Lecture Recordings</h1>
				<p class='col-md-12 fs-4'>Recordings of past study sessions</p>
				<div class='row align-items-md-stretch' style={{ marginTop: '20px' }}>
					<div class='col-md-6' style={{ marginTop: '10px' }}>
						<div class='h-100 p-5 text-white bg-dark rounded-3'>
							<h2>Organic Chemistry | Isomerism</h2>
							<p>
								<span class='badge badge-danger'>02 Feb 2021, 4:00pm</span>
								<div>
									<span class='badge badge-danger'>120</span> minute session
								</div>
                                <div>
									<span class='badge badge-danger'>Video</span>
								</div>
							</p>
							<button class='btn btn-outline-light' type='button'>
								Rewatch
							</button>
						</div>
					</div>
					<div class='col-md-6' style={{ marginTop: '10px' }}>
						<div class='h-100 p-5 text-white bg-dark rounded-3'>
							<h2>Co-ordinate Geoemetery | Ellipse</h2>
							<p>
								<span class='badge badge-danger'>22 Jan 2022, 4:00pm</span>
								<div>
									<span class='badge badge-danger'>120</span> minute session
								</div>
                                <div>
									<span class='badge badge-danger'>Video</span>
								</div>
							</p>
                            
							<button class='btn btn-outline-light' type='button'>
								Rewatch
							</button>
						</div>
					</div>
					<div class='col-md-6' style={{ marginTop: '10px' }}>
						<div class='h-100 p-5 text-white bg-dark rounded-3'>
							<h2>Electrical Electrical | Semiconductors </h2>
							<p>
								<span class='badge badge-danger'>22 Jan 2022, 4:00pm</span>
								<div>
									<span class='badge badge-danger'>120</span> minute session
								</div>
                                <div>
									<span class='badge badge-danger'>Video</span>
								</div>
							</p>
							<button class='btn btn-outline-light' type='button'>
								Rewatch
							</button>
						</div>
					</div>
					<div class='col-md-6' style={{ marginTop: '10px' }}>
						<div class='h-100 p-5 text-white bg-dark rounded-3'>
							<h2> Physics | Fluid Dynamics </h2>
							<p>
								<span class='badge badge-danger'> 22 Jan 2022, 4:00pm </span>
								<div>
									<span class='badge badge-danger'>120 </span> minute session
								</div>
                                <div>
									<span class='badge badge-danger'>Video</span>
								</div>
							</p>
							<button class='btn btn-outline-light' type='button'>
								Rewatch
							</button>
						</div>
					</div>
				</div>
			</div>
            <div class='container' style={{ marginTop: '30px' }}>
				<h1 class='display-5 fw-bold'>Lecture Notes</h1>
				<p class='col-md-12 fs-4'>Recordings of past study sessions</p>
				<div class='row align-items-md-stretch' style={{ marginTop: '20px' }}>
					<div class='col-md-6' style={{ marginTop: '10px' }}>
						<div class='h-100 p-5 text-white bg-dark rounded-3'>
							<h2>Organic Chemistry | Isomerism</h2>
							<p>
								<span class='badge badge-danger'>02 Feb 2021, 4:00pm</span>
								<div>
									<span class='badge badge-danger'>12</span>pages
								</div>
							</p>
							<button class='btn btn-outline-light' type='button'>
								Open
							</button>
						</div>
					</div>
					<div class='col-md-6' style={{ marginTop: '10px' }}>
						<div class='h-100 p-5 text-white bg-dark rounded-3'>
							<h2>Co-ordinate Geoemetery | Ellipse</h2>
							<p>
								<span class='badge badge-danger'>22 Jan 2022, 4:00pm</span>
								<div>
									<span class='badge badge-danger'>30</span> pages
								</div>
							</p>
                            
							<button class='btn btn-outline-light' type='button'>
								Open
							</button>
						</div>
					</div>
				</div>
			</div>
            <div class='container' style={{ marginTop: '30px' }}>
				<h1 class='display-5 fw-bold'>Paid Solutions</h1>
				<p class='col-md-12 fs-4'>Purchased solutions can be found here </p>
				<div class='row align-items-md-stretch' style={{ marginTop: '20px' }}>
					<div class='col-md-6' style={{ marginTop: '10px' }}>
						<div class='h-100 p-5 text-white bg-dark rounded-3'>
							<h2>Organic Chemistry | Isomerism</h2>
							<p>
								<span class='badge badge-danger'>02 Feb 2021, 4:00pm</span>
								<div>
									<span class='badge badge-danger'>3</span> pages
								</div>
							</p>
							<button class='btn btn-outline-light' type='button'>
								Open
							</button>
						</div>
					</div>
					<div class='col-md-6' style={{ marginTop: '10px' }}>
						<div class='h-100 p-5 text-white bg-dark rounded-3'>
							<h2>Co-ordinate Geoemetery | Ellipse</h2>
							<p>
								<span class='badge badge-danger'>22 Jan 2022, 4:00pm</span>
								<div>
									<span class='badge badge-danger'>5</span> pages
								</div>
							</p>
                            
							<button class='btn btn-outline-light' type='button'>
								Open
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudyMaterial;
