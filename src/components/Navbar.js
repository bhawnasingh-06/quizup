import React,{useEffect} from 'react';
import { Link , useLocation,useNavigate} from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/admin/login');
  }
  let location=useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <h4 style={{color:"white",margin:"0rem 2rem 0rem 2rem"}}>QuizUp</h4>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/admin/adminhome"?"active":""}` } aria-current="page" to="/admin/adminhome">Questions</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/admin/adminfetchusers"?"active":""}` } aria-current="page" to="/admin/adminfetchusers">Users</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/admin/adminfetchfeedbacks"?"active":""}` } aria-current="page" to="/admin/adminfetchfeedbacks">Feedbacks</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex">
        <Link className="btn btn-light mx-2" to="/admin/login" type="submit">Login</Link>
        {/* <Link className="btn btn-light mx-2" to="/signup" type="submit">Sign Up</Link> */}
      </form>:<button onClick={handleLogout} className="btn btn-light mx-2">Logout</button>}
    </div>
  </div>
</nav>
  )
};

export default Navbar;