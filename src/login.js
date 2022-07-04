import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'
import Home from './home';
import {useNavigate} from 'react-router-dom'


function Login() {  
    const navigate=useNavigate()
    const [users,setUsers]=useState()

    const [notification,setNotification]=useState(false)
    const [errors,setErrors]=useState()
    const initialvalues={
      username:'',
      password:'',
    }
    const[values,setValues]=useState(initialvalues)
    useEffect(()=>{
    },[])
    const validate=(fieldValues=values)=>{
      console.log(fieldValues,'rajeshuyttrwe')
      let temp = { ...errors }
      if ('title' in fieldValues)
          temp.username = fieldValues.username.length>0 ? "" : "Username cannot be empty."
      if ('body' in fieldValues)
          temp.password = fieldValues.password.length > 0? "" : "Password cannot be empty."
      setErrors({
          ...temp
      })
      console.log(temp)
      if (fieldValues == values)
          return Object.values(temp).every(x => x == "")
  }
   
  const handlechange=(e)=>{
    console.log('tyui',e.target.value,e.target.name)
    var name=e.target.name
     var value=e.target.value
     console.log(value,'goat')
     setValues({...values,[name]:value})
     
  validate ({[name]:value,values,errors,setErrors})
  }
  const handlesubmit=(e)=>{
  e.preventDefault()
  if(validate()){
    console.log('ok bro')
    var obj={username:values.username,password:values.password}
    var data=JSON.stringify(obj);
  setValues(initialvalues)
  }
  else{
    alert('fill all the fields')
    console.log('sorry bro')
  }
  setNotification(true)
  setTimeout(() => {
   setNotification(false) 
  }, 2000);
  navigate('/home')
  }
  return (
    <div className='loginform'>
  <form  onSubmit={handlesubmit} className='form'>
    <label for='title'>Username
    </label>
    <input type='text' alt='' name='username' className='inputtext' value={values?.username&&values.username} onChange={handlechange}/>
    <h5 className='error'>{errors?.username&&errors.username}</h5> 
    <label for='body'>Password
    </label>
    <input type='text' alt='' name='password' className='inputtext' value={values?.password&&values.password} onChange={handlechange}/>
    <h5 className='error'>{errors?.password&&errors.password}</h5>
    <input type='submit' className='submitbtn'/>
    <h5 className='error'>{notification&&'Posted successfully'}</h5>
    </form>
   </div>
  );
}

export default Login;
