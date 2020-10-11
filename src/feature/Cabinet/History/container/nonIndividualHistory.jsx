import React from "react";

import { Loader } from "../../../Common/Loader";
import { Table } from "antd";
import style from "./index.module.scss";
import GridContainer from "components/Grid/GridContainer";  
import GridItem from "components/Grid/GridItem";
import config from "config/app";
import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  accessKeyId: config.AWS_ACCESS_KEY,
  secretAccessKey: config.AWS_SECRET_KEY,
});

export const NonIndividualHistory = (props) => {
  
  const renderLink = (text) => {
    if (text) {
    }
    return (
      <GridContainer>
        {text && text.length > 0 && (
          <>
            {text.map((link, index) => (
              <GridItem key={index}>
                <a href={`${config.API_BASE_URL}/download?location=${link}`} target='_blank' download >Download</a>
              </GridItem>
            ))}
          </>
        )}
      </GridContainer>
    );
  };

  const columns = [
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Nothing",
      dataIndex: "nothingFilePath",
      key: "nothingFilePath",
      render: renderLink,
    },
    {
      title: "For-Assignment",
      dataIndex: "assignmentFilePath",
      key: "assignementFilePath",
      render: renderLink,
    },
    {
      title: "Others",
      dataIndex: "otherFilePath",
      key: "otherFilePath",
      render: renderLink,
    },
    {
      title: "Another",
      dataIndex: "anotherFilePath",
      key: "anotherFilePath",
      render: renderLink,
    },
  ];

  return (
    <div>
      <h1>History ({props.history.length})</h1>
      <div className={style.usersList}>
        <Loader isLoading={props.isLoading}>
          <Table columns={columns} dataSource={props.history} rowKey="_id" />
        </Loader>
      </div>
    </div>
  );
};
