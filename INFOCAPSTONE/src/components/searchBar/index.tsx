import React from 'react';
import { AutoComplete, Input } from 'antd';
import { connect } from 'dva';
import { useState } from 'react';
import { history } from 'umi';
import axios from 'axios';

const { Search } = Input;

function SearchBar(props: any) {
  const { courseList, width, update, size='large' ,courseMap, updateCourseMap, updateCourseCode} = props;
  //const [codeMp, setcodeMp] = useState(new Map());
  function searchHandler(val: string) {
    axios
      .get(
        'https://capstone2022-342303.uw.r.appspot.com/course/search?query=' +
          val,
      )
      .then((Response) => {
        let fetched: any[] = Response.data.data;
        //本轮搜索的course_code - course_full_name对词典， 用以替换codeMp
        let currentMap = new Map();
        const results: string[] = fetched.map((val: any): string => {
          currentMap.set(val.course_full_name, val.course_code);
          return  val.course_full_name;
        });
        updateCourseMap(currentMap);
        update(results);
      });
  }

  function redirect(val: string, obj?: Object): void {
    updateCourseCode(courseMap.get(val))
    history.push('/courseInfo/detail?code=' + courseMap.get(val));
  }

  return (
    <div style={{ width: '100%' }} className="barInner">
      <AutoComplete
        onSelect={redirect}
        onSearch={searchHandler}
        style={{ width: width, borderRadius: '25px' }}
        dataSource={courseList}
      >
        <Search
          placeholder="Search for course titles e.g MATH 124"
          size={size}
          style={{borderRadius: '10px'}}
        />
      </AutoComplete>
    </div>
  );
}

const mapStateProps = (state: any) => {
  return {
    courseList: state.courseInfo.courseList,
    courseMap: state.courseInfo.courseMap,
  };
};

const actionCreator = {
  update: (payload: string[]) => {
    return {
      type: 'courseInfo/update',
      payload,
    };
  },
  updateCourseMap: (payload: Map<any, any>)=>{
    return {
      type: 'courseInfo/updateCourseMap',
      payload,
    }
  },
  updateCourseCode: (payload: string) => {
    return {
        type: 'courseInfo/updateCourseCode',
        payload,
    };
  }
};

export default connect(mapStateProps, actionCreator)(SearchBar);
