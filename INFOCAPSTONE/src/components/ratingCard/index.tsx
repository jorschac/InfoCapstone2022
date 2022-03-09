import React, { useEffect, useState } from 'react'
import { connect } from 'dva';
import axios from 'axios';



const RatingCard = (props:any) => {
    const {professors, courseCode} = props
    const [currentProfessor, setCurrentProfessor] = useState('All')
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
			withdraw: 0
		},
		rating_breakdown: {
			the_course_as_a_whole: 0,
			the_course_content: 0,
			instructor_contribution: 0,
			instructor_effectiveness: 0,
			instructor_interest: 0,
			quiz_section_content: 0,
			grading_techniques: 0,
			amount_learn: 0
		}
    }
    const [state, setState] = useState(initialState)
    useEffect(()=>{
        axios.get(
            'https://capstone2022-342303.uw.r.appspot.com/course/professor/info?course_code='
            + courseCode + '&professor_name='
            + currentProfessor
        ).then((Response) => {
            console.log(Response.data.data);
            setState(Response.data.data);
        }
        )
    }, [currentProfessor])
    return(
        <div>...</div>
    )
}


const mapStateProps = (state: any) => {
    return {
        professors: state.courseInfo.professors,
        courseCode: state.courseInfo.courseCode
    };
};

export default connect(mapStateProps)(RatingCard);
