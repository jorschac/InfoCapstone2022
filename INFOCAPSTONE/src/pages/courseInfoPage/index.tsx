import React from 'react'
import {useEffect, useState} from 'react'
import styles from '@/pages/index.css'
import RatingCard from '@/components/ratingCard'
import {history} from 'umi'

function CourseInfoPage(props:any){
    return (
        <div className={styles.cards}>
        <RatingCard/>
        </div>
    );
}

export default CourseInfoPage
