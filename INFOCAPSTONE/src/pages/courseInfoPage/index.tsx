import React from 'react'
import {useEffect, useState} from 'react'
import styles from '@/pages/index.css'
import RatingCard from '@/components/ratingCard'
import BreakDown from '@/components/breakDown'
import {history} from 'umi'
import {Divider} from 'antd'

function CourseInfoPage(props:any){
    return (
        <div className={styles.cards}>
            <RatingCard/>
            <Divider/>
            <BreakDown/>
        </div>
    );
}

export default CourseInfoPage
