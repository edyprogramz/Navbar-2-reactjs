import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillContacts } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";



export const MenuData = [
    {
        'title': 'Home',
        'url': '#',
        'cName': 'navlink home',
        'icon': <BsFillHouseDoorFill />
    },
    {
        'title': 'About',
        'url': '#',
        'cName': 'navlink',
        'icon': <BsInfoCircleFill />
    },
    {
        'title': 'Services',
        'url': '#',
        'cName': 'navlink',
        'icon': <BsFillBriefcaseFill />
    },
    {
        'title': 'Contact',
        'url': '#',
        'cName': 'navlink',
        'icon': <AiFillContacts />
    },
    {
        'title': 'Blog',
        'url': '#',
        'cName': 'navlink',
        'icon': <FaBloggerB />
    },
    {
        'title': 'Sign Up',
        'url': '#',
        'cName': 'navlink nav-btn'
    }
]