import React from "react";
import style from "./index.module.scss";
import { Row, Col } from "antd";

export const Auth = ({ children }) => {
  return (
    <div className={style.animate_area}>
      <Row style={{ zIndex: 999 }}>
        <Col
          xs={{ span: 14, offset: 5 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 10, offset: 7 }}
          lg={{ span: 8, offset: 8 }}
          xl={{ span: 6, offset: 9 }}
        >
          {children}
        </Col>
      </Row>
      <ul className={style.bg_bubbles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
