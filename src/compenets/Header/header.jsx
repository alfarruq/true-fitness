import { NavLink, useNavigate,  } from "react-router-dom";
import "./header.css";
import logo from '../../assets/logo.png'

function Header() {
  const navigate = useNavigate();
  return (
    <header className="container" >
        <nav className="header-top" >
            <img onClick={() => navigate("/")} src={logo} alt="" />
                <div className="header-top-left" >
                    <p>+998 (90)-606-66-66</p>
                    <button className="header-btn" >оставить заявку</button>
                </div>
        </nav>
        <hr />
      <nav className="links" >
       
            <NavLink to={"/brend"}>о бренде</NavLink>
            <NavLink to={"*"}>продукциИ</NavLink>
            <NavLink to={"/advantages"}>преимущества</NavLink>
            <NavLink to={"/openclub"}>открыть клуб</NavLink>
            <NavLink to={"/contact"}>контакты</NavLink>
          
      </nav>
    </header>
  );
}

export default Header;
