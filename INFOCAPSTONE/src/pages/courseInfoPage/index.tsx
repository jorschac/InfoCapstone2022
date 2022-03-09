import React from 'react'
import {useEffect, useState} from 'react'
import styles from '@/pages/index.css'
import RatingCard from '@/components/ratingCard'
import {history} from 'umi'
import NavBar from '../../components/navBar' 
import axios from 'axios'

function CourseInfoPage(props:any){
    return (
        <div>
            <div className={styles.cards}>
                <RatingCard/>
            </div>
        </div>
    );
}

export default CourseInfoPage
