import React, { MouseEventHandler } from 'react';
import SearchBar from '../searchBar'
import styles from './index.css'
import {history} from 'umi'



const NavBar = (props:any) => {
    let click = (e:any) => {
        e.preventDefault()
        history.push('/')
    }
    return (
        <div className={styles.navBarWrapper}>
            <h3 className={styles.title}><a style={{color: '#755ebf'}} onClick={click}>Course Expert</a></h3>
            <div style={{margin: '1.5vh 0 0'}}>
                <SearchBar width={'35vw'} size={'default'}/>
            </div>        
        </div>
    )
}

export default NavBar