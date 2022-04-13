import React from 'react';
import styles from '../index.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  Legend,
} from 'recharts';
import _ from 'lodash';

/**
 * rating部分右侧的柱状图
 * @param props 
 */
const Diagram = (props: any) => {
  const { gradeMap, distribution } = props;
  const dataSet = _.map(distribution, (key, val) => {
    //console.log(gradeMap, val)
    return {
      name: gradeMap[val][0],
      percentage: key,
      orgin: val,
      topLabel: `${key}%`,
    };
  });

  const tipContent = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      //console.log(payload[0].payload['percentage'])
      let name = payload[0].payload['orgin'];
      let percent = payload[0].payload['percentage'];
      return (
        <div className={styles.tipContent}>
          <p className={styles.grade}>{`Grade: ${label.toUpperCase()}`}</p>
          <p className={styles.gpaRange}>{`GPA Range: ${gradeMap[name][1]}`}</p>
          <p className={styles.percentage}>{`Percentage: ${percent}%`}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <BarChart
        width={620}
        height={320}
        data={dataSet}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={tipContent} />
        <Legend verticalAlign="top" height={36} content={<div> Grade Distribution </div>}/>
        <Bar dataKey="percentage" barSize={30} fill="#755ebf">
        <LabelList
            dataKey="topLabel"
            position="top"
            style={{ fontSize: 'x-small', color: '#755ebf' }}
          />
        </Bar>
      </BarChart>
    </div>
  );
};

export default Diagram;