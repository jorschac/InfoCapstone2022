import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import axios from 'axios';
import styles from './index.css';
import ThreeBubbles from './threeBubbles';
import Diagram from './barChart';
import { Select, Divider } from 'antd';

/**
 * courseInfo中间content部分的course rating部分
 * @param props
 */
const RatingCard = (props: any) => {
  const { professors, courseCode, gradeMap, updateBreakdown } = props;
  const [currentProfessor, setCurrentProfessor] = useState('All');
  const initialState = {
    overall_rating: 0,
    average_gpa: 0,
    hours: 0,
    grade_distribution: {
      a: 0,
      a_minus: 0,
      b_plus: 0,
      b: 0,
      b_minus: 0,
      c_plus: 0,
      c: 0,
      c_minus: 0,
      d_plus: 0,
      d: 0,
      d_minus: 0,
      fail: 0,
      withdraw: 0,
    },
    rating_breakdown: {
      the_course_as_a_whole: 0,
      the_course_content: 0,
      instructor_contribution: 0,
      instructor_effectiveness: 0,
      instructor_interest: 0,
      quiz_section_content: 0,
      grading_techniques: 0,
      amount_learn: 0,
    },
  };
  const [state, setState] = useState(initialState);
  const { Option } = Select;
  useEffect(() => {
    if (courseCode.length && currentProfessor.length) {
      axios
        .get(
          'https://capstone2022-342303.uw.r.appspot.com/course/professor/info?course_code=' +
            courseCode +
            '&professor_name=' +
            currentProfessor,
        )
        .then((Response) => {
          //console.log(Response.data.data);
          setState(Response.data.data);
          updateBreakdown(Response.data.data.rating_breakdown);
        });
    }
  }, [currentProfessor, courseCode]);

  //生成教授下拉列表的选项
  const options = professors.map((val: string) => {
    return <Option value={val}>{val}</Option>;
  });

  function changeHandler(val: string) {
    setCurrentProfessor(val);
  }

  return (
    <div className={styles.dropMenuAndContent}>
      <div className={styles.dropdown}>
        <span style={{ fontSize: 'large', margin: '5px', fontWeight: 'bold' }}>
          Select a Professor:{' '}
        </span>
        <Select
          defaultValue={currentProfessor}
          onChange={changeHandler}
          style={{ width: '60%', display: 'inline-block', left: '20px' }}
        >
          {options}
        </Select>
      </div>
      <div className={styles.content}>
        <ThreeBubbles
          renderData={[
            ['Overall Rating', state.overall_rating + ' / 5'],
            ['Average GPA', state.average_gpa],
            ['Hours Per Week', state.hours],
          ]}
        />
        <div>
          <Diagram
            gradeMap={gradeMap}
            distribution={state.grade_distribution}
          />
        </div>
      </div>
      <p style={{alignSelf: 'flex-end', fontSize: 'x-small', opacity: '0.4'}}>Data collected from UW for 2016-2021</p>
    </div>
  );
};

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

export default connect(mapStateProps, actionCreator)(RatingCard);
