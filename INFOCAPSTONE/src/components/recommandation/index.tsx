import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import styles from './index.css';
import Rol from './rol';

/**
 * 
 * @param props 
 * 课程推荐组件
 */
function Recommandation(props: any) {
  const { TabPane } = Tabs;
  const initialContent: recommandationData = {
    gpa_booster: [],
    popular_courses: [],
    tech: {},
  };
  let [content, setContent] = useState(initialContent);

  useEffect(() => {
    axios
      .get('https://capstone2022-342303.uw.r.appspot.com/course/recommendation')
      .then((res) => {
        setContent(res.data.data);
      });
  }, []);

  return (
    <div className={styles.recommendation}>
      <Tabs
        defaultActiveKey="1"
        size="large"
        tabBarGutter={50}
        tabBarStyle={{ marginBottom: '4vw' }}
      >
        <TabPane tab="Gpa Booster" key="1">
          <Rol courses={content.gpa_booster} />
        </TabPane>
        <TabPane tab="Popular Courses" key="2">
          <Rol courses={content.popular_courses} />
        </TabPane>
        <TabPane tab="Tech" key="3">
          <Rol courses={content.tech} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Recommandation;
