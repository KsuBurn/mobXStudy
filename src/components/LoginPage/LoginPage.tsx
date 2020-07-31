import React, { FC, useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import styles from './LoginPage.module.css';
import { useHistory } from 'react-router-dom';
import { useAuthorization } from '../../hooks/useAuthorization';
import classnames from 'classnames';
import { removeSpaces } from '../../utils/removeSpaces';

const LoginPage: FC = () => {
  const [inputData, setInputData] = useState({
    login: '',
    password: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();
  const [form] = Form.useForm();
  const isLogin = useAuthorization(inputData);

  const handleChange: Function = (e: EventTarget & HTMLInputElement) => (name: string) => {
    setShowAlert(false);
    setInputData({ ...inputData, [name]: removeSpaces(e.value) });
  };

  const authorization = (auth: boolean) => {
    if (auth) {
      localStorage.setItem('auth', auth.toString());
      history.push('/');
      window.location.reload();
      form.resetFields();
    }
  };

  const onFinishFailed = (err: object) => {};

  const layout = {
    labelCol: { span: 4, offset: 0 },
    wrapperCol: { span: 16, offset: 1 },
  };

  const tailLayout = {
    wrapperCol: { offset: 5 },
  };

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Авторизация</h3>
      <Form {...layout} form={form} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Логин"
          name="login"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, заполните поле Логин',
            },
          ]}
        >
          <Input
            name="login"
            onChange={event => handleChange(event.target)(event.target.name)}
            value={removeSpaces(inputData.login)}
          />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, заполните поле Пароль',
            },
          ]}
        >
          <Input.Password
            name="password"
            onChange={event => handleChange(event.target)(event.target.name)}
            value={removeSpaces(inputData.password)}
          />
        </Form.Item>
        <div
          className={classnames({
            [styles.notError]: true,
            [styles.isError]: showAlert,
          })}
        >
          <Alert
            message="Не удаётся войти"
            description="Неверный логин или пароль"
            type="error"
            showIcon
          />
        </div>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              authorization(isLogin);
              isLogin ? setShowAlert(false) : setShowAlert(true);
            }}
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
