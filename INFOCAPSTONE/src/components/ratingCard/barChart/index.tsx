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
  let total = 0
  _.map(distribution, (key, val) => {
    //console.log(gradeMap, val)
    total += key
    //console.log('total cnt added... ', key, ' on ', total)
    return {
      name: gradeMap[val][0],
      percentage: key,
      orgin: val,
      topLabel: `${key}%`,
    };
  });

  const dataSet = _.map(distribution, (key, val) => {
    //console.log(gradeMap, val)
    //console.log('total is ... ', total, ' key is ', key, ' per is ', Math.round((key/total) * 100))
    return {
      name: gradeMap[val][1],
      percentage: Math.round((key/total) * 100),
      orgin: val,
      topLabel: `${Math.round((key/total) * 100)}%`,
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
        width={740}
        height={320}
        data={dataSet}
        margin={{
          top: 5,
          right: 70,
          left: 20,
          bottom: 5,
        }}
        barGap={'9'}
        barSize={'1'}
        barCategoryGap={'9'}
      >
        <XAxis dataKey="name" style={{fontSize:'xx-small'}} interval={0} angle={0} dx={1} dy={1}/>
        <YAxis />
        <Tooltip content={tipContent} />
        <Legend verticalAlign="top" height={36} content={<div> Grade Distribution </div>}/>
        <Bar dataKey="percentage" barSize={36} fill="#755ebf">
        <LabelList
            dataKey="topLabel"
            position="top"
            style={{ fontSize: 'xx-small', color: '#755ebf' }}
          />
        </Bar>
      </BarChart>
    </div>
  );
};

export default Diagram;
