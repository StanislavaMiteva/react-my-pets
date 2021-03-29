import {Link} from 'react-router-dom';

const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/categories/all">All</Link></li>
                <li><Link to="/categories/Cats">Cats</Link></li>
                <li><Link to="/categories/Dogs">Dogs</Link></li>
                <li><Link to="/categories/Parrots">Parrots</Link></li>
                <li><Link to="/categories/Reptiles">Reptiles</Link></li>
                <li><Link to="/categories/Other">Other</Link></li>
            </ul>
        </nav>
    );
}

export default CategoryNavigation;