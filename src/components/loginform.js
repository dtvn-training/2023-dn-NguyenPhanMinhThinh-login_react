import React, { useState } from "react";
import "./loginform.scss"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [messageEmail, setMessageEmail] = useState("");
    const [messagePassword, setMessagePassword] = useState("");


    const handleEmailOnChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
    }

    const handleOnClickLogin = (e) => {
        let flag = true
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (regex.test(email))
            setMessageEmail("")
        else {
            setMessageEmail("Email is Invalid")
            flag = false
        }


        if (password === "") {
            setMessagePassword("Missing Password")
            flag = false
        }

        else
            setMessagePassword("")

        const info = {
            "email": email,
            "password": password
        }

        var responses
        if (flag) {
            fetch("http://127.0.0.1:8000/users/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info)
            }).then((response) => {
                responses = response
                console.log(response)
                if (response.status === 200)
                    alert("Login successful")
                else
                    alert("Unable Username and Password")
            }).catch(rejected => {
                console.log(rejected);
            });
        }


    }


    return (
        <div className="cover">
            <h1> Welcome</h1>
            <div className="login-input">
                <input
                    type="text" placeholder="Email" value={email} onChange={handleEmailOnChange}>
                </input>
                {
                    messageEmail ? <span>*{messageEmail}</span> : <span className="hide"></span>
                }
            </div>

            <div className="login-input">
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordOnChange}></input>
                {
                    messagePassword ? <span>*{messagePassword}</span> : <span className="hide"></span>
                }
            </div>

            <button className="login-btn" onClick={handleOnClickLogin}>Login</button>

            <div className="alt-login">
                <div className="facebook"> Facebook </div>
                <div className="google"> Google </div>

            </div>
        </div>
    )
}

export default LoginForm