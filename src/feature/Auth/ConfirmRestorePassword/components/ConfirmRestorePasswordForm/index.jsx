import React from "react";
import { Form, Input, Button, message } from "antd";
import style from "./index.module.scss";

const confirmRestorePasswordForm = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        props.handleSubmit(values);
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
        message.success({ content: 'Password set successfully..', key, duration: 2 });
        }, 1000);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className={style.authHeader}>
        {"Reset Password"}
      </h1>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter your Password!" }
          ]}
          {...(props.isError && {
            help: props.errorMessage,
            validateStatus: "error"
          })}
          style={{
            textAlign: "center"
          }}
        >
          {getFieldDecorator("password", {
            rules: [
              { required: true, message: "Please input your password!" }
            ]
          })(<Input type="password" placeholder="Password" />)}
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: "Please enter your Password again!" }
          ]}
          {...(props.passwordNotMatched && {
            help: "Passwords do not match ",
            validateStatus: "error"
          })}
          style={{
            textAlign: "center"
          }}
        >
          {getFieldDecorator("confirmPassword", {
            rules: [
              { required: true, message: "Please input your password again!" }
            ]
          })(<Input type="password" placeholder="Confirm Password" />)}
        </Form.Item>

      <Form.Item>
        <Button
          // loading={props.isLoading}
          type="primary"
          style={{
          }}
          htmlType="submit"
        >
          {"Submit"}
        </Button>
      </Form.Item>
    </Form>
  )
}

export const ConfirmRestorePasswordForm = Form.create({ name: "confirmRestorePasswordForm" })(
  confirmRestorePasswordForm
);
