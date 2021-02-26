import React from "react";
import { Link} from "react-router-dom";

const Menu = () => {
    return (

        <nav id="menu">
            <div className="inner">
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: 50,
                    fontSize: 30,
                    fontWeight: "bold"
                }}>
                    <span>BAIC MOTORS</span>
                </div>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to='/cars'>Наши автомобили</Link></li>
                    <li><Link  to="/about">О нас</Link></li>
                    <li><Link to="/team">Наша Команда</Link></li>
                    {/*<li><Link to="/blog">Blog</Link></li>*/}
                    <li><Link to="/testimonials">Отзывы</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu