import React from 'react'
import styles from './index.css'
import { useRouteMatch } from 'umi';
import {useEffect, useState} from 'react'
import axios from 'axios'
import SearchBar from '../components/searchBar' 

export default function(){
    const [courseList, setCourseList] = useState(['']);
    useEffect(() => {
      axios.get(
          'https://capstone2022-342303.uw.r.appspot.com/course/list'
        ).then(Response => {
             let fetched:any[] = Response.data.data;
             const results:string[] = fetched.map((val:any):string => {
                return ' ' + val.course_full_name
             })
             //console.log(results)
             setCourseList(results)
          }
        )
    }, [])
    return (
        <div className={styles.contentWrapper}>
          <div className={styles.logo}>
              <img src={require('../assets/logo.jpeg')} alt='logo icon' width='42px' height='42px'/>
              <p style={{margin: 0, color: '#1890FF'}}>Course Expert</p>
          </div>
          <div className={styles.barWrapper}>
            <SearchBar list={courseList} width='100%'/>
          </div>
        </div>
      );
}

