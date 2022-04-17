import axios from 'axios';
import { history } from 'umi';

interface QAClientInterface {
  fetch: (url?: string) => Promise<any>;
  submit: (submitType: string, payload: object, url: string) => void;
}

/**
 * 负责QA页面数据交互的抽象类，包含：
 *
 * @props
 * - fetchUrl: 获取列表的url
 * - submitUrl: 提交请求的url
 *
 * @method
 * - fetch(): 获取QA问题列表
 * - submit(): 提交新问题/回答
 */
class QAClient implements QAClientInterface {
  fetchUrl: string;
  submitUrl: string;

  constructor(fetchUrl: string, submitUrl: string) {
    this.fetchUrl = fetchUrl;
    this.submitUrl = submitUrl;
  }

  fetch(url?: string): Promise<any> {
    let fetchUrl = url ? url : this.fetchUrl;
    let code: string | string[] | null = history.location.query
      ? history.location.query.code
      : '';
    return axios.get(`${fetchUrl}?course_code=${code}`);
  }

  async submit(type: string, payload: object, url?: string): Promise<any> {
    //确定data格式
    let data =
      type === 'addQuestion'
        ? {
            course_code: history.location.query
              ? history.location.query.code+''
              : '',
            question_text: payload.text+'',
          }
        : {
            course_code: history.location.query
              ? history.location.query.code
              : '',
              question_id: payload.id,
            answer_text: payload.text,
          };

    try {
      let submitUrl = url ? url : this.submitUrl;
      let response = await axios.post(submitUrl, data);
      //return axios.get(`${this.fetchUrl}?course_code=${payload.code}`);
      return this.fetch.call(this)
    } catch (err) {
      console.log('post提交错误', err);
      return Promise.reject(err);
    }
  }
}

export default QAClient;
