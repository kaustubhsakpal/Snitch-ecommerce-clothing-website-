import { setuser, setloading, seterror } from "../state/auth.slice.js";
import { login } from "../services/auth.api.js";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  async function registerhandler({ username, email, password }) {
    try {
      dispatch(setloading(true));
      const data = await register({ username, email, password });
      console.log(data);
      dispatch(setuser(data.user));
    } catch (err) {
      console.log(err);
      dispatch(seterror(err.response?.data?.message || "something went wrong"));
      throw new Error(err);
    } finally {
      dispatch(setloading(false));
    }
  }

  async function loginhandler({email, password} ) {
    console.log(email);
    
    try {
      dispatch(setloading(true));
      const data = await login({email, password });
      console.log(data);
      dispatch(setuser(data.user));
    } catch (err) {
      if(err.response?.status==401){
          dispatch(seterror("invalid email or password"));
        }
        else{
          dispatch(seterror("something went wrong"));
      }
      throw new Error( err);
    } finally {
      dispatch(setloading(false));
    }
  }

  async function getmehandler() {
    try {
      dispatch(setloading(true));
      const data = await getme();
      dispatch(setuser(data.user));
    } catch (err) {
      console.log(err);
      dispatch(seterror(err.response?.data?.message || "something went wrong"));
      throw new Error(err);
    } finally {
      dispatch(setloading(false));
    }
  }
  return { registerhandler, loginhandler, getmehandler };
};
