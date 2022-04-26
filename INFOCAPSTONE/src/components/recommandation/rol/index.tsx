import { xor } from 'lodash';
import React, { useState } from 'react';
import styles from './index.css';
import { history } from 'umi';
import _ from 'lodash';

/**
 *
 * @param
 * - props
 * - courses: 课程列表， 类型为数组或对象
 *
 * 课程推荐组件的内容组件
 */
function Rol(props: any) {
  const { courses } = props;
  //   console.log(courses)

  let redirectHandler = (e: any) => {
    let courseCode = e.target.getAttribute('key-data');
    history.push('/courseInfo/detail?code=' + courseCode);
  };

  let cards;

  if (courses instanceof Array) {
    cards = courses.map((name: string) => {
      return (
        <div>
          <div className={styles.singleCard} key-data={name} onClick={redirectHandler}>
            <div className={styles.textContent}>{}</div>
          </div>
          <p className={styles.textContent}>{name}</p>
          <p className={styles.breifInfo}>NW, QSR | 4 CRs</p>
        </div>
      );
    });
    return <div className={styles.cardsContainer}>{cards}</div>;
  } else {
    let cardsWithTitle = [];
    let keys = _.keys(courses);
    for (let key of keys) {
      let subcards = courses[key].map((name: string) => {
        return (
          <div>
            <div className={styles.singleCard} key-data={name} onClick={redirectHandler}>
              <div className={styles.textContent}>{}</div>
            </div>
            <p className={styles.textContent}>{name}</p>
            <p className={styles.breifInfo}>NW, QSR | 4 CRs</p>
          </div>
        );
      });


      cardsWithTitle.push(
        <div className={styles.rolInRols}>
          <div className={styles.subTitle}>{key.split('_').join(' ')}</div>
          <div className={styles.cardsContainer}>{subcards}</div>
        </div>,
      );
    }
    return <div className={styles.rolsContainer}>{cardsWithTitle}</div>;
  }
}

export default Rol;
