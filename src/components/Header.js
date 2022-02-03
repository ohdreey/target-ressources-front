
import { NavLink } from 'react-router-dom'

import '../styles/Header.css'

const Header = () => { 
    return (
        <div className='container'>
            <div className='navigation'>
                <ul>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/page1">
                        <li>Page 1</li>
                    </NavLink>
                    <NavLink to="/page2">
                        <li>Page 2</li>
                    </NavLink>
                    <NavLink to="/page3">
                        <li>Page 3</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Header