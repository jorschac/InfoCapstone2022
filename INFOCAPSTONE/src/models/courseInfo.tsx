export default {
    namespace: 'courseInfo',
    state: {
        courseList: [''],
        professors: ['All'],
        courseCode: '',
        gradeMap: {
            a: ['A', '4.0 - 3.9'],
			a_minus: ['A-', '3.8 - 3.5'],
			b_plus: ['B+', '3.4 - 3.2'],
			b: ['B', '3.1 - 2.9'],
			b_minus: ['B-', '2.8 - 2.5'],
			c_plus: ['C+', '2.4 - 2.2'],
			c: ['C', '2.1 - 1.9'],
			c_minus: ['C-', '1.8 - 1.5'],
			d_plus: ['D+', '1.4 - 1.2'],
			d: ['D', '1.1 - 0.9'],
			d_minus: ['D-', '0.8 - 0.7'],
			fail: ['F', '0'],
			withdraw: ['W', 'withdraw']
        },
        breakdown: {},
        courseMap: new Map()
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
        },
        updateBreakdown(state: any, {payload}: any) {
            return {...state, breakdown: payload}
        },
        updateCourseMap(state: any, {payload}: any) {
            return {...state, courseMap: payload}
        }
    }
}