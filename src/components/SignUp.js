import React from 'react';
import { Facebook, Twitter, Google } from 'react-bootstrap-icons';
const SignUp = () => {
	return (
		<div class='container'>
			<div class='form-signin' style={{ marginTop: '100px' }}>
				<h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Sign Up </h1>
				<form>
					<div class='form-floating'>
						<input
							type='email'
							class='form-control'
							id='floatingInput'
							placeholder='name@example.com'
                            required
						/>
						<label for='floatingInput'>Email address</label>
					</div>
                    <div class='form-floating'>
						<input
							type='text'
							class='form-control'
							id='floatingInput'
							placeholder='Your Name'
                            required
						/>
						<label for='floatingInput'>Name</label>
					</div>
                    <div class='form-floating'>
						<select
							class='form-control'
							id='floatingInput'
							placeholder='Your Name'
                            required
						>
                        <option>University</option>
                        <option>Senior secondary</option>
                        <option>Secondary</option>
                        
                        </select>
						<label for='floatingInput'>Education</label>
					</div>
					<div class='form-floating'>
						<input
							type='password'
							class='form-control'
							id='floatingPassword'
							placeholder='Password'
                            required
						/>
						<label for='floatingPassword'>Password</label>
					</div>
                    
					<button class='w-100 btn btn-lg btn-primary' type='submit'>
						<a href='/dashboard' style={{textDecoration:"none", color:"white"}}>Sign Up</a>
					</button>
				</form>
                
			</div>
			<div style={{textAlign:"center"}}>
            Already a member? <a href='/signin' style={{textAlign:'center', textDecoration:'none'}}>Sign In     &nbsp;   </a> 
                <h5 style={{marginBottom:"25px", marginTop:"25px"}}><b>or </b></h5 >
				<a href='/dashboard' > 
					<Facebook size={30}/>
				</a>
				<a href='/dashboard' style={{marginLeft:"30px"}}>
					<Google size={30} />
				</a>
			</div>
		</div>
	);
};

export default SignUp;
