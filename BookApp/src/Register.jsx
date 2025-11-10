import React from 'react'

const Register = () => {
  return (
    <div className="card">
        <h2>Register Page</h2>
        <form>
            <div>
                <label>Username:</label>
                <input type="text" name="username" />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register