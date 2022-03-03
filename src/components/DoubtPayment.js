import React from 'react';
import { PersonCheckFill, ShieldLockFill } from 'react-bootstrap-icons';
import { TextField } from '@mui/material';

const Doubt = () => {
	return (
		<div class='container'>
			<div class='py-5 text-center'>
				<PersonCheckFill size={48} />
				<h1>Doubt Session Portal</h1>
				<p class='lead'>
					{' '}
					We will get in touch with you shortly with a session with our knowlege
					experts
				</p>
			</div>

			<div class='row g-5'>
				<div class='col-md-5 col-lg-4 order-md-last'>
					<h4 class='d-flex justify-content-between align-items-center mb-3'>
						<span class='text-primary'>Your cart</span>
						<span class='badge bg-primary rounded-pill'>1</span>
					</h4>
					<ul class='list-group mb-3'>
						<li class='list-group-item d-flex justify-content-between lh-sm'>
							<div>
								<h6 class='my-0'>Product name</h6>
								<small class='text-muted'>Brief description</small>
							</div>
							<span class='text-muted'>₹100</span>
						</li>
						<li class='list-group-item d-flex justify-content-between bg-light'>
							<div class='text-success'>
								<h6 class='my-0'>Promo code</h6>
								<small>EXAMPLECODE</small>
							</div>
							<span class='text-success'>−₹40</span>
						</li>
						<li class='list-group-item d-flex justify-content-between'>
							<span>Total (INR)</span>
							<strong>₹60</strong>
						</li>
					</ul>

					<form class='card p-2'>
						<div class='input-group'>
							<input
								type='text'
								class='form-control'
								placeholder='Promo code'
							/>
							<button type='submit' class='btn btn-secondary'>
								Redeem
							</button>
						</div>
					</form>
				</div>
				<div class='col-md-7 col-lg-8'>
					<h4 class='mb-3'>Doubt Session Booking</h4>
					<form class='needs-validation' novalidate>
						<div class='row g-3'>
							<div class='col-sm-6'>
								<label for='Course' class='form-label'>
									Course
								</label>
								<select class='form-select' id='course' required>
									<option value=''>Choose...</option>
									<option>Computer Science Engineering</option>
									<option>Mechanical Engineering</option>
									<option>Electrical Engineering</option>
									<option>Biotechnology Engineering</option>
									<option>Coordinate Geoemetery</option>
								</select>
								<div class='invalid-feedback'>
									Please select a valid course.
								</div>
							</div>

							<div class='col-sm-6'>
								<label for='lastName' class='form-label'>
									Topic
								</label>
								<input
									type='text'
									class='form-control'
									id='lastName'
									placeholder=''
									value=''
									required
								/>
								<div class='invalid-feedback'>
									Valid topic name is required.
								</div>
							</div>

							<div class='col-12'>
								<label for='address' class='form-label'>
									Question
								</label>
								<textarea
									class='form-control rounded-0'
									id='address'
									rows='10'
									placeholder='Describe your question here'
									required></textarea>
								<div class='invalid-feedback'>Please enter your query.</div>
							</div>

							<form>
								<div class='form-group'>
									<label for='exampleFormControlFile1'>
										Upload Question{' '}
										<span class='badge bg-info rounded-pill'>.pdf</span>{' '}
										<span class='badge bg-info rounded-pill'>.jpg</span>{' '}
										<span class='badge bg-info rounded-pill'>.png</span>&nbsp;
									</label>
									<input
										type='file'
										class='form-control-file'
										id='exampleFormControlFile1'
									/>
								</div>
							</form>

							<div class='col-sm-6'>
								<label for='country' class='form-label'>
									Language Prefered
								</label>
								<select class='form-select' id='country' required>
									<option value=''>Choose...</option>
									<option>English</option>
									<option>Hindi</option>
								</select>
								<div class='invalid-feedback'>
									Please select a valid language.
								</div>
							</div>

							<div class='col-sm-6'>
								<label for='Mode' class='form-label'>
									Mode
								</label>
								<select class='form-select' id='course' required>
									<option value=''>Choose...</option>
									<option>Chat Interface</option>
									<option>Audio Interface</option>
									<option defaultChecked>Video Interface <span class="badge bg-success">recommended</span></option>
								</select>
								<div class='invalid-feedback'>
									Please select a valid course.
								</div>
							</div>

							<div>
								<TextField
									fullWidth
									id='datetime-local'
									label='Appointment'
									type='datetime-local'
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</div>
						</div>

						<h4 class='mb-3'>Payment</h4>

						<div class='my-3'>
							<div class='form-check'>
								<input
									id='credit'
									name='paymentMethod'
									type='radio'
									class='form-check-input'
									checked
									required
								/>
								<label class='form-check-label' for='credit'>
									Credit card
								</label>
							</div>
							<div class='form-check'>
								<input
									id='debit'
									name='paymentMethod'
									type='radio'
									class='form-check-input'
									required
								/>
								<label class='form-check-label' for='debit'>
									Debit card
								</label>
							</div>
							<div class='form-check'>
								<input
									id='upi'
									name='paymentMethod'
									type='radio'
									class='form-check-input'
									required
								/>
								<label class='form-check-label' for='upi'>
									UPI
								</label>
							</div>
							<div class='form-check'>
								<input
									id='paypal'
									name='paymentMethod'
									type='radio'
									class='form-check-input'
									required
								/>
								<label class='form-check-label' for='paypal'>
									Wallet
								</label>
							</div>
						</div>

						<div class='alert alert-info' role='alert'>
							<ShieldLockFill /> Redirect to Bill Desk Secure Payment Gateway
						</div>

						<button class='w-100 btn btn-primary btn-lg' type='submit'>
							Book Session
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Doubt;
