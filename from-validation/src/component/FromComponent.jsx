import { useState } from 'react'
import './FromComponent.css'

const FromComponent = () => {
    const [userName,setuserName] = useState('')
    const [email, setemail]= useState('')
    const [password, setpassword] = useState('')
    const [confirm, setconfirm] = useState('')
    
    const [errorUsername,seterrorUsername] = useState('')
    const [errorEmail,seterrorEmail] = useState('')
    const [errorPassword,seterrorPassword] = useState('')
    const [errorConfirm, setErrorConfirm] = useState('')

    const [useNamecolor,setuseNamecolor] = useState('')
    const [emailcolor,setemailcolor] = useState('')
    const [passwordcolor,setpasswordcolor] = useState('')
    const [confirmcolor,setcomfirmcolor] = useState('')
    
    const validateForm = (e) =>{
        e.preventDefault()

        if (userName.length > 8) {
            seterrorUsername('')
            setuseNamecolor('green')
        }else{
            seterrorUsername('Please fill in the information with 8 characters.')
            setuseNamecolor('red')
        }

        if (email.includes('@')) {
            seterrorEmail('')
            setemailcolor('green')
        }else{
            seterrorEmail('Invalid email format')
            setemailcolor('red')
        }

        if (password.length > 8) {
            seterrorPassword('')
            setpasswordcolor('green')
        }else{
            seterrorPassword('Password must be 8 characters.')
            setpasswordcolor('red')
        }

        if (confirm && confirm === password) {
            setErrorConfirm('')
            setcomfirmcolor('green')
        }else{
            setErrorConfirm('Password is incorrect')
            setcomfirmcolor('red')
        }
    }
    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>register</h2>
                <div className="formcontrol">
                    <label>username</label>
                    <input type="text" value={userName} onChange={(e)=>setuserName(e.target.value)} style={{borderColor:useNamecolor}}/>
                    <small style={{color:useNamecolor}}>{errorUsername}</small>
                </div>
                <div className="formcontrol">
                    <label>email</label>
                    <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} style={{borderColor:emailcolor}}/>
                    <small style={{color:emailcolor}}>{errorEmail}</small>
                </div>
                <div className="formcontrol">
                    <label>password</label>
                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} style={{borderColor:passwordcolor}}/>
                    <small style={{color:passwordcolor}}>{errorPassword}</small>
                </div>
                <div className="formcontrol">
                    <label>comfirm password</label>
                    <input type="password" value={confirm} onChange={(e)=>setconfirm(e.target.value)} style={{borderColor:confirmcolor}}/>
                    <small style={{color:confirmcolor}}>{errorConfirm}</small>
                </div>
                <button type="submit">
                    submit
                </button>
            </form>
        </div>
    )
}

export default FromComponent