// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
import { Link } from "react-router-dom";
import "../styles/InventoryLayout.css";

// eslint-disable-next-line react/prop-types
const InventoryLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="inventoryLayout-Header">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical">
            <h3 className="sidebar_header">Billing App</h3>
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/inventory">Inventory update</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/purchase-bill">Purchase Bill update</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/inventory">Inventory category</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<VideoCameraOutlined />}>
              <Link to="/nav4">Vendor Account</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              <Link to="/nav5">Customer Account</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}>
              <Link to="/nav6">Inventory Items</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<UploadOutlined />}>
              <Link to="/nav7">Damage Items</Link>
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
                <h6 className="header">Tabsoft Billing</h6>
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
    </div>
  );
};

export default InventoryLayout;
