import {Link} from 'react-router-dom';

const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/categories/all">All</Link></li>
                <li><Link to="/categories/Cat">Cats</Link></li>
                <li><Link to="/categories/Dog">Dogs</Link></li>
                <li><Link to="/categories/Parrot">Parrots</Link></li>
                <li><Link to="/categories/Reptile">Reptiles</Link></li>
                <li><Link to="/categories/Other">Other</Link></li>
            </ul>
        </nav>
    );
}

export default CategoryNavigation;