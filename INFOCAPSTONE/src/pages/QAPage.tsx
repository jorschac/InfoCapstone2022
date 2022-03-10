import React from 'react'
import {useEffect, useState} from 'react'
import styles from '@/pages/index.css'
import RatingCard from '@/components/ratingCard'
import BreakDown from '@/components/breakDown'
import {history} from 'umi'
import {connect} from 'dva'
import {Divider} from 'antd'

function QAPage(props:any){
    return (
        <div className={styles.cards}>
            <img src={require('../assets/coffin_dance.gif')} alt='git' width='700vh' height='400vh'/>
            <h1>QA is coming soon...</h1>
        </div>
    );
}

const mapStateProps = (state: any) => {
    return {
      professors: state.courseInfo.professors,
      courseCode: state.courseInfo.courseCode,
      gradeMap: state.courseInfo.gradeMap,
    };
  };
  
  const actionCreator = {
    updateBreakdown: (payload: {}) => {
      return {
        type: 'courseInfo/updateBreakdown',
        payload,
      };
    }
  };
  
  export default connect(mapStateProps, actionCreator)(QAPage);