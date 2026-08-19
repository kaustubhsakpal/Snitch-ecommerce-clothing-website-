import axios from 'axios';

const api=axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
})

export const register= async (username,email,password)=>{
try{
     const res= await api.post('/auth/register', {username,email,password})
     return res.data;
    }
    catch(err){
      console.log(err);
    }
}

export const login =async({email,password})=>{
try{
const res= await api.post('/auth/register',{email,password});
return res.data;
}
catch(err){
console.log(err);
}
}

export const getme=async ()=>{
 try{
  const res=await api.get('/auth/getme');
  return res.data;
 }
 catch(err){
    console.log(err);
 }
}

