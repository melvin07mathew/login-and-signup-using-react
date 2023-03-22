import { useState } from "react";

export default function Login(){
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [invaliduser,setInvaliduser]  = useState("")
    const [invalidpassword,setInvalidpassword] = useState("")

    async function login_submit(event){
        if(invaliduser==="" && invalidpassword==="" && user !== "" && password !== ""){
            alert(`Welcome ${user}`)}
        else{
            event.preventDefault()
        }
        
    }
    function reset(){
        setUser("")
        setPassword("")
      }  
    
    function user_onchange(event){
        setUser(event.target.value)
        if (user.length < 5){
            setInvaliduser("user name must contain minimum 5 letters")
        }else{
            setInvaliduser("")
        }
    }
    function password_check(event){
        setPassword(event.target.value)
        if (password.length < 8){
            setInvalidpassword("minimum 8 characters required")
        }else{
            setInvalidpassword("")
        }
    }

    return(
        <div style={{backgroundImage:`url("https://th.bing.com/th/id/OIP.k-mvRnIREs0IGE_8yOYv8wHaEo?pid=ImgDet&rs=1")`}}>
            <h1 style={{ color: 'green', padding: 20,marginLeft:20}} >Kanban Board</h1>
            <div className="card mx-auto" style={{maxWidth:370,backgroundColor:'wheat'}}>
                <form onSubmit={login_submit} className="card-body">
                <h5 className="card-header">Login Form</h5><br></br>
                    <div className="card-text mb-3">
                        <label className="form-label" htmlFor="user_name">User name  </label>
                        <br></br><span className="card-text mb-3" style={{color:'red'}}>{invaliduser}</span>
                        <input className="form-control"  id="user_name" type="text" onChange={user_onchange} value={user} placeholder="user name"></input>
                    </div>
                    <div className="card-text mb-3">
                        <label className="form-label" htmlFor="password">Password  </label>
                        <br></br><span style={{color:'red'}}>{invalidpassword}</span>
                        <input className="form-control" type="password" id="password" value={password} onChange={password_check} placeholder="Password"></input>
                    </div>
                    <div className="card-text mb-3">
                        <button style={{margin : 10}} className="btn btn-success" type="submit">Login</button>&nbsp;
                        <button className="btn btn-primary" type="reset" onClick={reset} >Reset</button>
                    </div>
                </form>
                <a href='#' className="card-text text-center mb-3">Not a user ? click here to Signup</a>
            </div>
        </div>
    )
}