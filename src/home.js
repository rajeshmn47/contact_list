import logo from './logo.svg';
import './App.css';
import { useEffect,useState,useRef } from 'react';
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Skeleton from '@mui/material/Skeleton';
import Skelton from './skeleton'
import {useNavigate} from 'react-router-dom'



function Home() {  
    const navigate=useNavigate()
    const listInnerRef = useRef();
    const [Loading,setLoading]=useState(false)
  const[users,setUsers]=useState([])
  async function getusers(){
    setLoading(true)
    const data= await axios.get('https://randomuser.me/api?results=25')
    setUsers([...users,...data.data.results])
    setLoading(false)
        }
  useEffect(()=>{
          getusers()
  },[])
  var z='4'
  const firstletter=(str)=>{
if(!(z===str)){
  z=str
 
  return z;
}
  else{
    
  return null;
  }
}

const onscroll = () => {
    console.log('rajesh')
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      console.log(scrollTop, scrollHeight, clientHeight)
      if (scrollTop + clientHeight === scrollHeight) {
        // TO SOMETHING HERE
        console.log('Reached bottom')
        setLoading(true)
        getusers()
        setLoading(false)
      }
    }
  };
  return (
    <div  onScroll={onscroll} ref={listInnerRef}>
   <div className='topbar'>
    <div className='topbar'>
   <MenuIcon/>
   <h5 style={{display:'flex',alignItems:'center',marginLeft:'1vw'}}>All <ArrowDropDownIcon/></h5>
   </div>
   <div className='topbar'>
  <SearchIcon style={{marginRight:'1vw'}}/>
  <button className='logout' onClick={()=>navigate('/')}>Logout</button>
  <MoreVertIcon/>
  </div>
  </div>
   <div className='contacts'>
   {users&&users.map((u)=><>
   <div className='contact' key={u.name.first}>
    <h1 style={{color:'red'}} key={u.name.last}>{firstletter(u.name.first[0])}</h1>
   <h5 key={u.name.first}>{u.name.first} {u.name.last+u.name.last}</h5>
   <img key={u.name.first+u.picture.thumbnail} src={u.picture.thumbnail} alt='' width='40' style={{borderRadius:'50%'}}/>
   </div>
   </>)}
   {Loading&&<Skelton />}

   </div>
    </div>
  );
}

export default Home;