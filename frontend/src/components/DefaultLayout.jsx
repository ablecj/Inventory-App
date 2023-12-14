/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../styles/DefaultStyle.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // uselocation
  const location = useLocation();
  const {pathname} = location;

  return (
    
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <h3 className="sidebar_header">Billing App</h3>
        </div>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
          <Menu.Item key="/" icon={<UserOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/billing-page" icon={<UserOutlined />}>
            <Link to="/billing-page">Billing</Link>
          </Menu.Item>
          <Menu.Item key="/inventory" icon={<UserOutlined />}>
            <Link to="/inventory">Inventory</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<VideoCameraOutlined />}>
            <Link to="/nav4">Report</Link>
          </Menu.Item>
          <Menu.Item key="/order-form" icon={<UploadOutlined />}>
            <Link to="/order-form">Order form</Link>
          </Menu.Item>
          <Menu.Item key="/purchase-account" icon={<UploadOutlined />}>
            <Link to="/purchase-account">Purchase A/c</Link>
          </Menu.Item>
          <Menu.Item key="/sales" icon={<UploadOutlined />}>
            <Link to="/sales">Sales</Link>
          </Menu.Item>
          <Menu.Item key="/customer-details" icon={<UploadOutlined />}>
            <Link to="/customer-details">customer A/c</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<UploadOutlined />}>
            <Link to="/nav8">Debit Note</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<UploadOutlined />}>
            <Link to="/nav9">Credit Note</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<UploadOutlined />}>
            <Link to="/nav10">Expence A/c</Link>
          </Menu.Item>
          <Menu.Item key="11" icon={<UploadOutlined />}>
            <Link to="/nav11">Invoice A/c</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px", // Add horizontal padding
            background: colorBgContainer,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 50,
                height: 50,
                margin: 0,
                // Add any additional styles for the button
              }}
            />
            <div className="header_container">
              <h3 className="header">Tabsoft Billing</h3>
            </div>
          </div>

          {/* <div ></div> Empty div for spacing */}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
   
  );
};

export default DefaultLayout;
