import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
              }),
            });   
            
            if (!response.ok) {
                const errorResponse = await response.json();
              throw new Error(errorResponse || 'Authentication failed');
            }

            const userData = await response.json();
            
            // Dispatch action storing user data
            dispatch(loginSuccess(userData));
            
            // calling the handleLogin function
            // handleLogin();
            navigate('/dashboard');
          } catch (error) {
            console.error('Login error:', error.message);
          }
    };
  
    return (
        <>
            <div className="container">
                <h2 style={{textAlign:"center", fontSize:" 40px"}}>Login Page</h2>  
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                        <label className='label'>Username:</label>
                        <input type="text" {...register("username", { required: true })} />
                        {errors.username && <span style={{color:"red"}}>Username is required</span>}
                    </div>
                    <div className="form">
                        <label className='label'>Password:</label>
                        <input type="password" {...register("password", { required: true })} />
                        {errors.password && <span style={{color:"red"}}>Password is required</span>}
                    </div>
                     <button type='submit'>Login</button>
                </form>      
            </div>
        </>
      
    )
}

export default Login