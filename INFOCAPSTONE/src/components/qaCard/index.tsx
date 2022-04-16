import React, { useState } from 'react';
import { IoChatbubbleEllipsesOutline, IoEyeOutline } from 'react-icons/io5';
import styles from './index.css';
import { Divider, Input } from 'antd';

/**
 * 单个的QA问答卡片组件
 * @param props
 *
 * questionText: 本问题的描述
 *
 * answers: 本问题的回答列表
 */

function QACard(props: any) {
  const { questionText = '服务器端数据有问题', answers = [] } = props;
  const { TextArea } = Input;
  let answerList: JSX.Element[] = [];
  let [inputOn, switcInutOn] = useState(false);

  for (let i = 0; i < answers.length; i++) {
    answerList.push(
      <div className={styles.singleAnswer}>
        <p className={styles.boldText}>A: </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div className={styles.singleAnswerText}>
            {answers[i].answer_text}
          </div>
          <div className={styles.singleAnswerTime}>
            {answers[i].answered_at}
          </div>
        </div>
      </div>,
    );
    if (i < answers.length - 1) {
      answerList.push(
        <div
          style={{
            width: '94%',
            position: 'relative',
            right: '-1.5vw',
            top: '-0.6vw',
          }}
        >
          <Divider style={{ marginBottom: '0px', marginTop: '4px' }} />
        </div>,
      );
    }
  }

  let inputBox;
  let relpyButton;
  let switchInputHandler = (e: any) => {
    let newState = !inputOn;
    switcInutOn(newState);
  };

  if (!inputOn) {
    inputBox = <div></div>;
    relpyButton = (
      <a
        style={{ display: 'flex', alignItems: 'center', marginTop: '4vh' }}
        onClick={switchInputHandler}
      >
        <IoChatbubbleEllipsesOutline />{' '}
        <span className={styles.answerButton}>Reply</span>
      </a>
    );
  } else {
    inputBox = (
      <div>
        <TextArea
          placeholder="share your answer here... "
          showCount
          maxLength={200}
        />
      </div>
    );
    relpyButton = (
      <a
        style={{ display: 'flex', alignItems: 'center', margin: '4vh 0px 1vh' }}
        onClick={switchInputHandler}
      >
        <IoEyeOutline /> <span className={styles.answerButton}>Collapse</span>
      </a>
    );
  }

  return (
    <div className={styles.container}>
      <span className={styles.boldText}>Q:</span>
      <span className={styles.questionText}>{questionText}</span>
      <Divider style={{ marginTop: '4px' }} />
      {answerList}
      {relpyButton}
      {inputBox}
    </div>
  );
}

export default QACard;
