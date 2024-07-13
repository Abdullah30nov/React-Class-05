import style from '../Login/Login.module.css';
// import '../../'
const Login=({toggleForm})=>{
    return(
        <div className={style.main}>
            <div className={style.container}>
                <h1 style={{fontSize:'50px'}}>Sign in</h1>
                <div className={style.inputs}>
                <i class="fa-solid fa-user"></i><input type="text"  placeholder=' Enter Name'/><br />
                <i class="fa-solid fa-lock"></i><input type="password"  placeholder='Password'/><br />
                </div>
                <p className={style.para}><input type="checkbox" /> <span style={{paddingLeft:"20px"}}>Remember me</span></p><br />
                <button className={style.btn }>Login</button><br />

                <span style={{}}>or login with<i class="fa-brands fa-square-facebook fa-2xl" style={{color: "#0541a8",paddingLeft:"5px",paddingRight:"5px"}}></i>
                <i class="fa-brands fa-square-twitter fa-2xl" style={{color: "#0091ff",paddingLeft:"5px",paddingRight:"5px"}}></i>
                <i class="fa-brands fa-square-instagram fa-2xl" style={{color: "#ff0000",paddingLeft:"5px",paddingRight:"5px"}}></i></span>
                <div className={style.image}>
                    <img src="../../public/login.png" alt="" />
                    <p>Create new <u onClick={toggleForm} style={{cursor:"pointer",color:"blue"}}>Account</u></p>
                </div>
            </div>
        </div>
        // npm i -g firebase-tools
        // npm run build
    )
}
export default Login