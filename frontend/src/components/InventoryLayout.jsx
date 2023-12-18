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
import { Link, useLocation } from "react-router-dom";
import "../styles/InventoryLayout.css";

// eslint-disable-next-line react/prop-types
const InventoryLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  const { pathname } = location;
  
  // MenuItems 
  const MenuItems = [
    {
      key: '/inventory',
      path: '/inventory',
      title: 'Inventory Update',
      icon: <UserOutlined />
    },
    {
      key: '/purchase-bill',
      path: '/purchase-bill',
      title: 'Purchase Bill Update',
      icon: <UserOutlined />
    },
    {
      key: '/vendor-account',
      path: '/vendor-account',
      title: 'Vendor Account',
      icon: <VideoCameraOutlined />
    },
    {
      key: '/customer-Account',
      path: '/customer-Account',
      title: 'Customer Account',
      icon: <UploadOutlined />
    },
    {
      key: '/inventory-items',
      path: '/inventory-items',
      title: 'Inventory Items',
      icon: <UploadOutlined />
    },
    {
      key: '/damage-items',
      path: '/damage-items',
      title: 'Damage Items',
      icon:  <UploadOutlined />
    }
  ]


  return (
    <div className="inventoryLayout-Header">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical">
            <h3 className="sidebar_header">Billing App</h3>
          </div>
          {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
            <Menu.Item key="/inventory" icon={<UserOutlined />}>
              <Link to="/inventory">Inventory update</Link>
            </Menu.Item>
            <Menu.Item key="/purchase-bill" icon={<UserOutlined />}>
              <Link to="/purchase-bill">Purchase Bill update</Link>
            </Menu.Item>
            <Menu.Item key="/vendor-account" icon={<VideoCameraOutlined />}>
              <Link to="/vendor-account">Vendor Account</Link>
            </Menu.Item>
            <Menu.Item key="/customer-Account" icon={<UploadOutlined />}>
              <Link to="/customer-Account">Customer Account</Link>
            </Menu.Item>
            <Menu.Item key="/inventory-items" icon={<UploadOutlined />}>
              <Link to="/inventory-items">Inventory Items</Link>
            </Menu.Item>
            <Menu.Item key="/damage-items" icon={<UploadOutlined />}>
              <Link to="/damage-items">Damage Items</Link>
            </Menu.Item>
          </Menu> */}

          {/* MenuItes Maping  */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
          {MenuItems.map((item) => (
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
