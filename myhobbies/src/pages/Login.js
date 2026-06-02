import React, { useState } from 'react'

const Login = (props) => {
    const [username, updateUsername] = useState('');
    const [password, updatePass] = useState('');

    const loginuser = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        })
        .then(res => {
            if (!res.ok) {
                return res.text().then(text => { throw new Error(text) });
            }
            return res.json();
        })
        .then(data => {
            console.log("Login success:", data);

            localStorage.setItem("token", data.token);

            if (props.onLogin) props.onLogin();
        })
        .catch(err => {
            console.error("Login error:", err.message);
        });
    }

    return (
        <div>
            <form>
                Username:
                <input
                    type="text"
                    onChange={(e) => updateUsername(e.target.value)}
                />
                <br/>

                Password:
                <input
                    type="password"
                    onChange={(e) => updatePass(e.target.value)}
                />
                <br/>

                <button type="submit" onClick={loginuser}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;