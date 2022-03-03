import React from 'react'
import { Google, Facebook } from 'react-bootstrap-icons'
const SignIn = () => {
  return (
    <div class='container'>
			<div class='form-signin' style={{ marginTop: '100px' }}>
				<h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Sign In </h1>
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
							type='password'
							class='form-control'
							id='floatingPassword'
							placeholder='Password'
                            required
						/>
						<label for='floatingPassword'>Password</label>
					</div>
                    
					<button class='w-100 btn btn-lg btn-primary' type='submit'>
					<a href='/dashboard' style={{textDecoration:"none", color:"white"}}>Sign In</a>
					</button>
				</form>
                
			</div>
			<div style={{textAlign:"center"}}>
            <a href='/signup' style={{textAlign:'center', textDecoration:'none'}}>Sign Up     &nbsp;   </a> |
            <a href="/" style={{textAlign:'center', textDecoration:'none'}}>  &nbsp;         Forgot Password</a>
                <h5 style={{marginBottom:"25px", marginTop:"25px"}}><b>or </b></h5 >
				<a href='/dashboard' > 
					<Facebook size={30}/>
				</a>
				<a href='/dashboard' style={{marginLeft:"30px"}}>
					<Google size={30} />
				</a>
			</div>
		</div>
  )
}

export default SignIn