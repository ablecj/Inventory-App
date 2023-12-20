/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../styles/DefaultStyle.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  AccountBookOutlined
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
  const { pathname } = location;

  // menu itemms
  const menuItems = [
    { key: "/",
     path: "/", 
     title: "Home", 
     icon: <UserOutlined /> 
    },
    {
      key: "/billing-page",
      path: "/billing-page",
      title: "Billing",
      icon: <UserOutlined />,
    },
    {
      key: "/inventory",
      path: "/inventory",
      title: "Inventory",
      icon: <UserOutlined />,
    },
    {
      key: "/order-form",
      path: "/order-form",
      title: "Order form",
      icon: <UploadOutlined />,
    },
    {
      key: "/purchase-account",
      path: "/purchase-account",
      title: "Purchase A/c",
      icon: <UploadOutlined />,
    },
    {
      key: "/sales",
      path: "/sales",
      title: "Sales A/C",
      icon: <UserOutlined />,
    },
    {
      key: "/customer-details",
      path: "/customer-details",
      title: "customer A/c",
      icon: <UserOutlined />,
    },
    {
      key: '/debit-note',
      path: '/debit-note',
      title: 'Debit Note',
      icon: <AccountBookOutlined />
    },
    {
      key: '/credit-note',
      path: '/credit-note',
      title: 'Credit Note',
      icon: <AccountBookOutlined />
    }
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <h3 className="sidebar_header">Billing App</h3>
        </div>
        {/* new code for the menu links */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          ))}
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
