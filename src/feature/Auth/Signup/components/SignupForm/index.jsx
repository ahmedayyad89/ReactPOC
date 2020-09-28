import React from "react";
import { Form, Input, Button, Row, Col, Typography, Select } from "antd";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import animate from "../../../../../assets/online-world-animate.svg";
import app from "../../../../../config/app";
import { userType } from "config/constants";

const SignupFormComponent = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        props.onSubmit(values);
      }
    });
  };

  const { Title } = Typography;

  return (
    <Row type='flex' align="middle">
      <Col span={12} className={style.card}>
        <object
          type="image/svg+xml"
          data={animate}
          className={style.animate}
          viewbox="0 0 1200 1200"
        >
          svg-animation
        </object>
        <h5 className={style.signupFooter}>Copyright © 2020. All rights reserved.</h5>
      </Col>
      <Col span={12}>
        <Title
          level={3}
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 50
          }}
        >
          Get onboard with us..
        </Title>
        <Form
          name="normal_login"
          onSubmit={handleSubmit}
          className={style.signinForm}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
            style={{
              width: "70%",
              marginLeft: 60,
            }}
          >
            {getFieldDecorator("name", {
              rules: [
                { required: true, message: "Please input your name!" },
                { min: 2, message: "Min length name 2 symbols!" },
                { max: 30, message: "Max length name 30 symbols!" }
              ]
            })(<Input placeholder="Name" />)}
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your Email" }]}
            style={{
              width: "70%",
              marginLeft: 60
            }}
            {...(props.isError && {
              help: props.errorMessage,
              validateStatus: "error"
            })}
          >
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input your email!" },
                { type: "email", message: "The input is not valid E-mail!" }
              ]
            })(<Input placeholder="Email" />)}
          </Form.Item>
          <Form.Item
              name="user_type"
              rules={[{ required: true, message: "Please select" }]}
              style={{
                width: "70%",
                marginLeft: 60
              }}
              {...(props.isError && {
                help: props.errorMessage,
                validateStatus: "error"
              })}
          >
            {getFieldDecorator("user_type", {
              rules: [
                { required: true, message: "Please select!" },
                { type: "string", message: "The input is not valid!" }
              ]
            })(
                <Select defaultValue="individual">
                  <Select.Option value={userType.individual}>Individual</Select.Option>
                  <Select.Option value={userType.nonIndividual}>Non-Individual</Select.Option>
                </Select>
            )}
          </Form.Item>
          <div className={style.captchaWrap}>
            {/* <Form.Item>
              {getFieldDecorator("recaptcha", {
                rules: [
                  { required: true, message: "Please fill the reCaptcha!" }
                ]
              })(
                  // <ReCAPTCHA
                  //     sitekey={app.captchaSiteKey}
                  // />
              )}
            </Form.Item> */}
          </div>
          <Form.Item>
            <Button
              type="primary"
              loading={props.isLoading}
              style={{ width: "100%" }}
              htmlType="submit"
              style={{
                width: "70%",
                marginLeft: 60
              }}
            >
              Sign up
            </Button>
            <div className={style.singupLinks}>
              Have an account?
              <Link to="/"> Login</Link>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export const SignupForm = Form.create({ name: "signinForm" })(
  SignupFormComponent
);
