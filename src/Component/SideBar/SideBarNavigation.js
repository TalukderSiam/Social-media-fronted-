import HomeIcon from '@mui/icons-material/Home';

import MessageIcon from '@mui/icons-material/Message';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExploreIcon from '@mui/icons-material/Explore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import GroupIcon from '@mui/icons-material/Group';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
export const NavigationMenu = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/"
    },
    {
        title: "Reels",
        icon: <ExploreIcon />,
        path: "/reels"
    },
    {
        title: "Create Reels",
        icon: <ControlPointIcon />,
        path: "/create-reels"
    },
    
    {
        title: "Message",
        icon: <MessageIcon />,
        path: "/message"
    },
    {
        title: "Lists",
        icon: <FormatListBulletedIcon />,
        path: "/lists"
    },
    
    {
        title: "Profile",
        icon: <AccountBoxIcon />,
        path: "/profile"
    },
    {
        title: "Notification",
        icon: <CircleNotificationsIcon/>,
        path: "/"
    },
    {
        title: "Commuinity",
        icon: <GroupIcon />,
        path: "/"
    },
];
