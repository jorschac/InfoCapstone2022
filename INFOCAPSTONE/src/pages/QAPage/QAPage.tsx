import React from 'react';
import { useEffect, useState } from 'react';
import styles from '@/pages/index.css';
import RatingCard from '@/components/ratingCard';
import BreakDown from '@/components/breakDown';
import QACard from '@/components/qaCard';
import { history } from 'umi';
import { connect } from 'dva';
import { Divider } from 'antd';

const answers = [
  {
    answer_text: 'Great intro class if you want to learn about ML',
    answered_at: '2021-02-15 16:40:15',
  },
  {
    answer_text:
      'I went to 3 lectures in person every week, and took 1 section. It costs much more time than any other STEM courses I took. Especially before midterms and final exams, I need a large mount of time for preparation.',
    answered_at: '2021-02-13 13:40:15',
  },
];

function QAPage(props: any) {
  /***
   * 先示范，之后要改
   * */
  return (
    <div className={styles.cards}>
      <div className={styles.discussionTitle}>Discussion</div>
      <QACard
        className={styles.discussionQuestion}
        questionText="What’s the most important skill set you’ve learned from this course? "
        answers={answers}
      />
      <QACard
        questionText="Is the workload heavy? How many hours do you spend every week?"
        answers={answers}
      />
      <QACard
        questionText="What’s the key to succeeding in this class? "
        answers={answers}
      />
      <QACard
        questionText="Is your professor caring and easy to communicate with?"
        answers={answers}
      />
      <QACard
        questionText="How hard is it to get a 3.5+ in this class? "
        answers={answers}
      />
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
  },
};

export default connect(mapStateProps, actionCreator)(QAPage);
