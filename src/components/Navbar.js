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
    <Link className="navbar-brand" to="/admin/adminhome">QuizUp</Link>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/admin/adminhome"?"active":""}` } aria-current="page" to="/admin/adminhome">Home</Link>
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