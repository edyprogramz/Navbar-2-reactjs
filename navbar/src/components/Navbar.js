import React, { Component } from 'react';
import '../styles/navbar.css';
import { MenuData } from './MenuData';
import { FaApple } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            clicked: false
        }
    }
    state = {  }

    clickHandler = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() { 
        return ( 
            <div id='full-page'>
                <div id='navbox'>
                    <h1>logo <FaApple /></h1>
                    <nav>
                        <ul id='navbar' className={this.state.clicked ? "navbar active" : "navbar"}>
                            {MenuData.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <a href={item.url} className={item.cName}>
                                            <i className='nav-icon'>{item.icon}</i>
                                            {item.title}
                                        </a>
                                    </li>
                                )})
                            }
                        </ul>
                    </nav>
                    <span className='mobile-nav' onClick={this.clickHandler}>{this.state.clicked ? <FaWindowClose /> : <FaBars />}</span>
                    
                    

                </div>
            </div>
        );
    }
}
 
export default Navbar;