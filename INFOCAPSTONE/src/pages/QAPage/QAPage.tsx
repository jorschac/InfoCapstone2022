import React from 'react';
import { useEffect, useState } from 'react';
import { history } from 'umi';
import styles from '@/pages/index.css';
import axios from 'axios';
import { Button, Modal, Form, Input, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'dva';

import QACard from '@/components/qaCard';
import QAClient from '@/types/types';

/**
 *
 * @param props
 * QA界面， 包含顶部的'add question'按钮和问题展示卡片
 */
function QAPage(props: any) {
  const { courseCode } = props;
  const { TextArea } = Input;
  let [state, setRender] = useState(
    new Array<JSX.Element>(
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />,
    ),
  );
  let [answerText, setAnswerText] = useState('');
  let [answerLength, setAnswerLength] = useState(0);
  let [showModal, setShowModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  //帮助数据获取的工具,详见@/types/types
  let qa = new QAClient(
    'https://capstone2022-342303.uw.r.appspot.com/course/qa/list',
    'https://capstone2022-342303.uw.r.appspot.com/course/question/add',
  );

  let handleCancel = () => {
    setShowModal(false);
  };

  let handleOpen = () => {
    setShowModal(true);
  };

  let handleRenderContent = (qaListResponse: any) => {
    if (qaListResponse) {
      let renderContent = qaListResponse.data.data.map((x: any) => {
        return (
          <QACard
            questionText={x['question_text']}
            answers={x['answers']}
            id={x['question_id']}
            handleRenderContent={handleRenderContent}
            setRender={setRender}
          />
        );
      });
      setRender(renderContent);
    }
  };

  let format = (cnt: any) => {
    return `${answerLength}/50 words`;
  };

  useEffect(() => {
    (async function callFetchHandler() {
      try {
        let qaListResponse = await qa.fetch();
        handleRenderContent(qaListResponse);
      } catch (err) {
        console.log('QA列表获取失败', err);
      }
    })();
  }, []);

  return (
    <div className={styles.cards}>
      <div className={styles.qaTitle}>
        <div className={styles.discussion}>Discussion</div>
        <Button type="primary" shape="round" size="large" onClick={handleOpen}>
          Add a question
        </Button>
        <Modal
          title="New Question"
          visible={showModal}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          onOk={() => {
            setConfirmLoading(true);
            form.validateFields().then((value) => {
              console.log(value, 'hahahhaha')
              qa.submit('addQuestion', {
                text: value.questionText,
              })
                .then((res) => {
                  handleRenderContent(res);
                  setConfirmLoading(false);
                  setShowModal(false);
                })
                .catch((err) => {
                  console.log('post请求出错， 在QAPage.tsx那个文件里');
                });
            });
          }}
        >
          <Form form={form}>
            <Form.Item style={{ height: '10vh' }} name="questionText">
              {answerLength <= 50 ? (
                <TextArea
                  placeholder="Describe your question, end with a question mark"
                  size="large"
                  showCount={{ formatter: format }}
                  onChange={(e) => {
                    setAnswerText(e.target.value);
                    setAnswerLength(e.target.value.split(' ').length);
                  }}
                />
              ) : new Array<JSX.Element>(
                <div>
                  <TextArea
                    placeholder="Describe your question, end with a question mark"
                    showCount={{ formatter: format }}
                    value={answerText}
                    rows={4}
                    style={{ border: '2.5px solid #ef0000' }}
                    onChange={(e) => {
                      setAnswerText(e.target.value);
                      setAnswerLength(e.target.value.split(' ').length);
                    }}
                  />
                  <div style={{ color: 'red' }}>50 words maximum</div>
                </div>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
      {state}
    </div>
  );
}

const mapStateProps = (state: any) => {
  return {
    courseCode: state.courseInfo.courseCode,
  };
};

const actionCreator = {
  updateBreakdown: (payload: {}) => {
    return {
      type: 'courseInfo/updateBreakdown',
      payload,
    };
  },
};

export default connect(mapStateProps, actionCreator)(QAPage);
