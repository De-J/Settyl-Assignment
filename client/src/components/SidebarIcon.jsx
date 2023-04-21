import { Link } from 'react-router-dom'

const SidebarIcon = ({ icon, link, text = 'tooltip' }) => (
    <Link to={link}>
        <div className="sidebar-icon">
            {icon}
            <span className="sidebar-tooltip">
                {text}
            </span>
        </div>
    </Link>
);

export default SidebarIcon;
