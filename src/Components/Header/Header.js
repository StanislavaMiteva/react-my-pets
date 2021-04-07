import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <div className="first-bar">
                        <Link to="/">Dashboard</Link>
                        <Link className="button" to="/myPets">My Pets</Link>
                        <Link className="button" to="/pets/create">Add Pet</Link>
                        <Link className="button" to="/pets/createNew">Add Pet New</Link>
                    </div>
                    <div className="second-bar">
                        <ul>
                            <li>Welcome, some name!</li>
                            <li>
                                <Link to="/logout">
                                    <i class="fas fa-sign-out-alt"></i>
                                     Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="navbar-anonymous">
                    <ul>
                        <li>
                            <Link to="/register"><i class="fas fa-user-plus"></i> Register</Link>
                        </li>
                        <li>
                            <Link to="/login"><i class="fas fa-sign-in-alt"></i> Login</Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    );
}

export default Header;