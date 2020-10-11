import React from "react";

import { Loader } from "../../../Common/Loader";
import { Table } from "antd";
import style from "./index.module.scss";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import config from "config/app";

export const IndividualHistory = (props) => {
  const renderLink = (text) => {
    if (text) {
    }
    return (
      <GridContainer>
        {text && text.length > 0 && (
          <>
            {text.map((link, index) => (
              <GridItem key={index}>
                <a
                  href={`${config.API_BASE_URL}/download?location=${link}`}
                  target="_blank"
                  download
                >
                  Download
                </a>
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
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "LastName",
      dataIndex: "lasttName",
      key: "lastName",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Passport",
      dataIndex: "passportFilePath",
      key: "passportFilePath",
      render: renderLink,
    },
    {
      title: "Driving License",
      dataIndex: "drivingLicenseFilePath",
      key: "drivingLicenseFilePath",
      render: renderLink,
    },
    {
      title: "Others",
      dataIndex: "otherFilePath",
      key: "otherFilePath",
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
