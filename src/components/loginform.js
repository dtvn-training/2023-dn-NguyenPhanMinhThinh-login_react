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
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (regex.test(email))
            setMessageEmail("Email is Valid")
        else
            setMessageEmail("Email is Invalid")

        if (password === "")
            setMessagePassword("Missing Password")
        else
            setMessagePassword("")

    }


    return (
        <div className="cover">
            <h1> Welcome</h1>
            <input
                type="text" placeholder="Email" value={email} onChange={handleEmailOnChange}>
            </input>
            <span>{messageEmail}</span>

            <input type="password" placeholder="Password" value={password} onChange={handlePasswordOnChange}></input>
            <span>{messagePassword}</span>
            <button className="login-btn" onClick={handleOnClickLogin}>Login</button>

            <div className="alt-login">
                <div className="facebook"> Facebook </div>
                <div className="google"> Google </div>

            </div>
        </div>
    )
}

export default LoginForm