const React = require('react');

function Login() {
  return (
    <>
      <header>
        <link href='/css/signin.css' rel='stylesheet'></link>
      </header>

        <h1>Login to Dishly</h1>
      <div className='container'>
        <form action="/users/login" method="POST">
          <div className="form-group1">
            <label className='as'>Enter User Name</label>
            <input className='name' type='text' name='name' required />
          </div>
          <br />
          <div className="form-group3">
            <label className='as'>Password</label>
            <input className='password' type='password' name='password' required />
          </div>

          <br />
          <button type="submit" className="submitbtn">Submit</button>
          <a className='create' href='/users/signup'>Create New Account</a>
        </form>
      </div>
    </>
  );
}

module.exports = Login;
