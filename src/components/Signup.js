import { useState } from "react";



export default function Signup(){
    const[username,setUsername] = useState("");
    const[mail,setMail] = useState("")
    const [password,setPassword]= useState("")
    const [retype,setRetype] = useState("")
    const [invaliduser,setinvaliduser] = useState("")
    const [invalidmail,setinvalidmail] = useState("")
    const [invalidpassword,setinvalidpassword] = useState("")
    const [retypepassword,setretyprpassword] =useState("")

    function signup(event){
        if (username === "" || mail === "" || password ==="" || retype === "" ){
            event.preventDefault();
        }
        else{
            if (password !== retype){
                event.preventDefault()
                setretyprpassword("password should be same")    
            }else{
                setretyprpassword("")
                alert(`Your account is created. ${username}`)
            }
        }
        
    }
    function reset(){
        setMail("")
        setUsername("")
        setPassword("")
        setRetype("")
    }

    function usernameevent(event){
        setUsername(event.target.value)
        if (username.length < 3){
            setinvaliduser("user name should have minimum 3 characters")
        }else{
            setinvaliduser("")
        }
    }

    function invalidmailcheck(event){
        setMail(event.target.value)
        var letters = /.*.@..*.\.co$/
        if (mail.match(letters)){
            setinvalidmail("")
        }else{
            setinvalidmail("enter a valid mail address")
        }
    }

    function passwordevent(event){
        setPassword(event.target.value)
        if (password.length < 8){
            setinvalidpassword("password should contain minimum 8 characters")
        }else{
            setinvalidpassword("")
        }
    }

    function passwordretypeevent(event){     
        setRetype(event.target.value)
    }


    return(
        <div style={{backgroundImage:`url("https://th.bing.com/th/id/OIP.k-mvRnIREs0IGE_8yOYv8wHaEo?pid=ImgDet&rs=1")`}}>
            <h1 style={{ color: 'green', padding: 20,marginLeft:20}} >Kanban Board</h1>
            <div className="card  mx-auto" style={{maxWidth:370,backgroundColor:'wheat'}}>
                <form  className="card-body" onSubmit={signup}>
                    <h5 className="card-header">Signup Form</h5><br></br>
                    <div className="card-text mb-3">
                        <label className="form-label">User Name</label>
                        <br></br><span className="card-text mb3" style={{color:'red'}}>{invaliduser}</span>
                        <input className="form-control" type="text" value={username} onChange={usernameevent}></input>
                    </div>
                    <div className="card-text mb-3">
                        <label className="form-label">Email</label>
                        <br></br><span className="card-text mb3" style={{color:'red'}}>{invalidmail}</span>
                        <input type="email" className="form-control" value={mail} onChange={invalidmailcheck}></input>
                    </div>
                    <div className="card-text mb-3">
                        <label className="form-label">Password</label>
                        <br></br><span className="card-text mb3" style={{color:'red'}}>{invalidpassword}</span>
                        <input type="password" value={password} onChange={passwordevent} className="form-control"></input>
                    </div>
                    <div className="card-text mb-3">
                        <label className="form-label">re-enter password</label>
                        <br></br><span className="card-text mb3" style={{color:'red'}}>{retypepassword}</span>
                        <input type="password" value={retype} onChange={passwordretypeevent} className="form-control"></input>
                    </div>
                    <div className="card-text mb-3">
                        <button type="submit" style={{margin:10}} className="btn btn-success">Submit</button>
                        <button type="reset" onClick={reset} className="btn btn-info">Reset</button>
                    </div>

                </form>        
             </div>
            </div>
    )
}