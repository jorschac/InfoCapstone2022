import React, { MouseEventHandler } from 'react';
import SearchBar from '../searchBar'
import styles from './index.css'
import {history} from 'umi'



const NavBar = (props:any) => {
    let {setTab = (key:string) => {}} = props
    let click = (e:any) => {
        e.preventDefault()
        history.push('/')
    }
    return (
        <div className={styles.navBarWrapper}>
            <h1 className={styles.title}><a style={{color: '#FFFFFF'}} onClick={click}>Course Expert</a></h1>
            <div style={{margin: '1.7vh 0 0'}}>
                <SearchBar width={'35vw'} setTab={setTab}/>
            </div>        
        </div>
    )
}

export default NavBar