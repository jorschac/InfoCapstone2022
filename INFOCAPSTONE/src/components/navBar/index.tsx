import React from 'react'
import {AutoComplete, Input} from 'antd'
import SearchBar from '../searchBar'
import styles from './navBar.css'

export default function NavBar(props:any) {
    const {list,width} = props
    return(
        <div className={styles.navBar}>
            <div style={{width: '100%'}} className={styles.titleLandingPage}>
                <p>Course Expert</p>
            </div>
            <div className = {styles.barWrapper}>
                <SearchBar width = "100%" list={list}/>
            </div>
        </div>


    );
}


