import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";


const Login = () => {

const {signUser, signInWithGoogle} = useContext(AuthContext)
     const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault()
        const email = e. target.email.value;
        const password = e. target.password.value;
        console.log (email, password);
        
     signUser(email, password)
     .then(result =>{
        console.log(result.user)
        e.target.reset();
       navigate('/');
     })
     .catch(error =>{
        console.log(error)
     })


    }

    const handlesignInWithGoogle = ()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#"  className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SingOut</button>
                            </div>
                        </form>
                        <p>
                            <Link className="btn btn-link" to="/register">Are you first login no??
                            please Register</Link>
                        </p>
                     <p><button onClick={handlesignInWithGoogle} className="btn btn-ghost">Google</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;