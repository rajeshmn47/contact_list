import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Skeleton from '@mui/material/Skeleton';
import Skelton from './skeleton'


function Home() {  
  const[users,setUsers]=useState()
  useEffect(()=>{
    async function getusers(){
      const data= await axios.get('https://randomuser.me/api?results=500')
      const use=data.data.results.sort((a,b)=>{if(a.name.first>b.name.first){
        return 1;
      }
      else {
        return -1;
      }})
      setUsers(use)
          }
          getusers()
  },[])
  var z='4'
  const firstletter=(str)=>{
if(!(z===str)){
  console.log(str,z,str===z)
  z=str
  console.log(str,z,str===z)
  return z;
}
  else{
    console.log('rajesh')
  return null;
  }
}
  return (
    <div>
   
   <div className='topbar'>
    <div className='topbar'>
   <MenuIcon/>
   <h5 style={{display:'flex',alignItems:'center',marginLeft:'1vw'}}>All <ArrowDropDownIcon/></h5>
   </div>
   <div className='topbar'>
  <SearchIcon style={{marginRight:'1vw'}}/>
  <MoreVertIcon/>
  </div>
  </div>
   <div className='contacts'>
   {users?users.map((u)=><>
   <div className='contact'>
    <h1 style={{color:'red'}}>{firstletter(u.name.first[0])}</h1>
   <h5>{u.name.first} {u.name.last}</h5>
   <img src={u.picture.thumbnail} alt='' width='40' style={{borderRadius:'50%'}}/>
   </div>
   </>):<Skelton />
}
   </div>
    </div>
  );
}

export default Home;