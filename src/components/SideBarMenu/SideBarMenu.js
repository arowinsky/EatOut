import React from 'react';
import styles from './SideBarMenu.module.scss';

const SideBarMenu = () => (
    <nav className={styles.sidebar_wrapper}>
        <ul>
            <li>Element 1</li>
            <li>Element 2</li>
        </ul>
    </nav>
)

export default SideBarMenu;