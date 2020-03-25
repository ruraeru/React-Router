import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/aladin">Aladin</Link>
                </li>
                <li>
                    <Link to="/lionking">Lion King</Link>
                </li>
                <li>
                    <Link to="/spiderman">Spider Man</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/todolist">Todo List</Link>
                </li>
                <li>
                    <Link to="/infinitescroll">Infinite Scroll(아직 할 줄 모름)</Link>
                </li>
                <li>
                    <Link to="/loginform">login logout</Link>
                </li>
                <li>
                    <Link to="colorfulcounter">ColorFul Counter</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;