import { Link } from "react-router-dom";
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context'
function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to='/new-meetup'>All New Meetups</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;