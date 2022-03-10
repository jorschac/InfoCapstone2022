import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './index.css';
import ProgressBar from './progressBar';

const BreakDown = (props: any) => {
  const { breakdown } = props;
  console.log(breakdown['the_course_as_a_whole'])
  return (
    <div className={styles.bars}>
      <h2 style={{margin: '0 4.2vh 2vh'}}>Rating Breakdown</h2>
      <div className={styles.twoBarsRow}>
        <ProgressBar value={breakdown['the_course_as_a_whole']} size={20} text={'The course as a whole'}/>
        <ProgressBar value={breakdown['the_course_content']} size={20} text={'The course content'}/>
      </div>
      <div className={styles.twoBarsRow}>
        <ProgressBar value={breakdown['instructor_contribution']} size={20} text={'Instructor\'s contribution'}/>
        <ProgressBar value={breakdown['instructor_effectiveness']} size={20} text={'Instructor\'s effectiveness'}/>
      </div>
      <div className={styles.twoBarsRow}>
        <ProgressBar value={breakdown['instructor_interest']} size={20} text={'Instuctor\'s interest'}/>
        <ProgressBar value={breakdown['quiz_section_content']} size={20} text={'Quiz section content'}/>
      </div>
      <div className={styles.twoBarsRow}>
        <ProgressBar value={breakdown['grading_techniques']} size={20} text={'Grading techniques'}/>
        <ProgressBar value={breakdown['amount_learn']} size={20} text={'Amount Learn'}/>
      </div>
    </div>
  );
};

const mapStateProps = (state: any) => {
  return {
    breakdown: state.courseInfo.breakdown,
  };
};

export default connect(mapStateProps)(BreakDown);
