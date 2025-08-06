const React = require('react');

function Signup(props) {
  
  const { name = '', password = '', email = '', _id = '' } = props.user || {}

  return (
    <>
    <h1 className='header'>Dishly</h1>
    <div className='Container'>
      <link rel='stylesheet' href="/css/signup.css"/>
        <h1 className='signup'>Sign Up</h1>
      <form action="/users" method="POST">
        <label className='as'>User Name</label>
        <input 
                        type="text" 
                        id="name"
                        name="name" 
                        placeholder="Enter your full name..."
                        required 
                    />

        <label className='as'>Email</label>
           <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="Enter your email..."
                        required 
                    />

        <label className='as'>Password</label>
           <input 
                        type="password" 
                        id="password"
                        name="password" 
                        placeholder="Enter your password..."
                        required 
                    />

        <div className="radio-group">
            <input type="radio" name="role" value="admin" /> Admin
            <input type="radio" name="role" value="user" />  User
        </div>

        <button type="submit">Sign Up</button>
        <a href='/users/login' className='already'>Already Have Account?</a>
      </form>
    </div>
    </>
    
  )
}

module.exports = Signup 