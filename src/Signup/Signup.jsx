import style from '../Signup/Signup.module.css';
// import '../../'
const Signup=({toggleForm})=>{
    return(
        <div className={style.main}>
            <div className={style.container}>
                <h1 style={{fontSize:'50px'}}>Sign Up</h1>
                {/* Sign up form */}
                <div className={style.inputs}>
                <i class="fa-solid fa-user"></i><input type="text"  placeholder=' Enter Name'/><br />
                <i class="fa-solid fa-envelope"></i><input type="email"  placeholder='Email'/><br />
                <i class="fa-solid fa-lock"></i><input type="password"  placeholder='Password'/><br />
                <i class="fa-solid fa-lock"></i><input type="password"  placeholder='Repeat Password'/><br />
                </div>
                <p className={style.para}><input type="checkbox" /> I have already account <u onClick={toggleForm} style={{cursor:"pointer",color:"blue"}}> Login</u></p><br />
                <button className={style.btn }>Register</button>
                <div className={style.image}>
                    <img src="../../public/signup.png" alt="" />
                    <u>i am Already member</u>
                </div>
            </div>
        </div>
    )
}
export default Signup