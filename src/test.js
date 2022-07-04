const axios=require('axios')
var users;
async function getusers(){
    const data= await axios.get('https://randomuser.me/api?results=500')
    const use=data.data.results.sort((a,b)=>{if(a.name.first>b.name.first){
        console.log('rajesh')
      return 1;
    }
    else {
      return -1;
    }})
    users=use
    users&&users.forEach((u)=>console.log(firstletter(u.name.first))) 
        }
        getusers()
z='A'
const firstletter=(str)=>{
            if(!(z===str)){
              console.log(str,z,str===z)
              z=str
              console.log(str,z,str===z)
              return 1;
            }
              else{
              return null;
              }
            }
   