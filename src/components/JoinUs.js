import React from 'react'

const JoinUs = () => {
  return (
    <div class='container'>
    <div class='form-signin' style={{ marginTop: '100px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}> Join Us </h1>
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
                    placeholder='123456789'
                    required
                />
                <label for='floatingInput'>Phone Number</label>
            </div>

            
            <button class='w-100 btn btn-lg btn-primary' type='submit' style={{marginTop:"20px"}}>
                Submit            
            </button>
        </form>
        </div>
        
    </div>
 
  )
}

export default JoinUs