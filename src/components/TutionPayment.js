import React from 'react'
import { PersonVideo3,ShieldLockFill } from 'react-bootstrap-icons'
const Tution = () => {
  return (
    <div class='container'>
    <div class='py-5 text-center'>
        <PersonVideo3 size={48} />
        <h1>Tutions Portal</h1>
        <p class='lead'>
            {' '}
            You can book flexible sessions with our knowlege expert.  
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
                    <span class='text-muted'>₹300</span>
                </li>
                <li class='list-group-item d-flex justify-content-between bg-light'>
                    <div class='text-success'>
                        <h6 class='my-0'>Promo code</h6>
                        <small>EXAMPLECODE</small>
                    </div>
                    <span class='text-success'>−₹50</span>
                </li>
                <li class='list-group-item d-flex justify-content-between'>
                    <span>Total (INR)</span>
                    <strong>₹250</strong>
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
                            required
                        />
                        <div class='invalid-feedback'>
                            Valid topic name is required.
                        </div>
                    </div>
                    
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
								<label for='Duration' class='form-label'>
									Duration (in Hours)
								</label>
								<select class='form-select' id='course' required>
									<option value=''>Choose...</option>
									<option>1</option>
									<option defaultChecked>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
								</select>
								<div class='invalid-feedback'>
									Please select a valid course.
								</div>
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
                    Book Tutions
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Tution