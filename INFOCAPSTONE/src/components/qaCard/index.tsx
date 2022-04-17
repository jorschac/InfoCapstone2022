import React, { useState } from 'react';
import { IoChatbubbleEllipsesOutline, IoEyeOutline } from 'react-icons/io5';
import styles from './index.css';
import { Divider, Input, Button } from 'antd';
import { divide } from 'lodash';
import QAClient from '@/types/types';

/**
 * 单个的QA问答卡片组件
 * @param
 * - props
 *
 * - questionText: 本问题的描述
 * - answers: 本问题的回答列表
 */

function QACard(props: any) {
  const {
    questionText = '服务器端数据有问题',
    answers = [],
    id,
    handleRenderContent,
    setRender,
  } = props;
  const { TextArea } = Input;
  let answerList: JSX.Element[] = [];
  let [inputOn, switcInutOn] = useState(false);
  let [answerText, setAnswerText] = useState('');
  let qa = new QAClient(
    'https://capstone2022-342303.uw.r.appspot.com/course/qa/list',
    'https://capstone2022-342303.uw.r.appspot.com/course/answer/add',
  );

  //获取渲染内容列表
  if (answers[0].answer_text === '') {
    answerList = [];
  } else {
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
  }

  //按钮,输入框
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
        <span style={{ paddingLeft: '5px' }}>Reply</span>
      </a>
    );
  } else {
    inputBox = (
      <div>
        <TextArea
          placeholder="share your answer here... "
          showCount
          maxLength={200}
          onChange={(e) => {
            setAnswerText(e.target.value);
          }}
        />
        <div style={{marginTop: '1vh'}}>
         {answerText? 
           <Button type="default" shape="round" size="small"
           onClick={() => {
            // console.log(
            //   {
            //     id: id,
            //     text: answerText,
            //   }
            // )
             qa.submit('addAnswer', {
              id: id,
              text: answerText,
            }).then( res => {
              handleRenderContent(res)
              setAnswerText('')
            }
            ). catch(
              err => {
                console.log(err)
              }
            )
           }}
          >
            Submit
          </Button>
          :
          <Button type="default" shape="round" size="small" disabled={true}>
           Submit
         </Button>
         }
        </div>
      </div>
    );
    relpyButton = (
      <a
        style={{ display: 'flex', alignItems: 'center', margin: '4vh 0px 1vh' }}
        onClick={switchInputHandler}
      >
        <IoEyeOutline /> <span style={{ paddingLeft: '5px' }}>Collapse</span>
      </a>
    );
  }

  if (answerList.length > 0) {
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
  } else {
    return (
      <div className={styles.container}>
        <span className={styles.boldText}>Q:</span>
        <span className={styles.questionText}>{questionText}</span>
        <Divider style={{ marginTop: '4px' }} />
        <div style={{ width: '14vw', margin: '4vh auto' }}>
          <Button
            type="primary"
            shape="default"
            size="large"
            onClick={switchInputHandler}
          >
            Share Your Experience
          </Button>
        </div>
        {inputBox}
      </div>
    );
  }
}

export default QACard;
