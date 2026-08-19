import axios from 'axios';
import { useDispatch } from 'react-redux';

const api=axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
})



// export const register= async (username,email,password)=>{
// try{
//      const res= await api.post('/auth/register', {username,email,password})
//      return res.data;
//     }
//     catch(err){
//       console.log(err);
//     }
// }

console.log(import.meta.env.VITE_BASE_URL);

export const login =async({email,password})=>{
try{
const res= await api.post('/auth/login',{email,password});
console.log(res.data);

return res.data;
}
catch(err){
throw err;
}
}

// export const getme=async ()=>{
//  try{
//   const res=await api.get('/auth/getme');
//   return res.data;
//  }
//  catch(err){
//     console.log(err);
//  }
// }

