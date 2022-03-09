export default {
    namespace: 'courseInfo',
    state: {
        courseList: [''],
        professors: ['All'],
        courseCode: ''
    },
    reducers: {
        update(state: any, {payload}: any){
            return {...state, courseList: payload}
        },
        updateProfessor(state: any, {payload}: any){
            return {...state, professors: payload}
        },
        updateCourseCode(state: any, {payload}: any) {
            return {...state, courseCode: payload}
        }
    }
}