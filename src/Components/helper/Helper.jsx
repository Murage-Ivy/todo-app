import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faHome, faTasks, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuItems = [
    {
        title: 'Home',
        url: '/dashboard',
        icon: <FontAwesomeIcon icon={faHome} />
    },

    {
        title: 'Calendar',
        url: '/calendar',
        icon: <FontAwesomeIcon icon={faCalendar} />
    },

    {
        title: 'Task List',
        url: '/tasklist',
        icon: <FontAwesomeIcon icon={faTasks} />
    },

    {
        title: 'Profile',
        url: '/profile',
        icon: <FontAwesomeIcon icon={faUser} />
    }
]

export default menuItems;