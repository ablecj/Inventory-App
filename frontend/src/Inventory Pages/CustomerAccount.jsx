// eslint-disable-next-line no-unused-vars
import React from "react";
import InventoryLayout from "../components/InventoryLayout";
import "../styles/customerAccount.css";
import { Input, Button, Form } from "antd";

const CustomerAccount = (values) => {
  const onFinish = () => {
    console.log("Received values:", values);
  };

  return (
    <InventoryLayout>
      <div className="customer-accnt-container">
        <div className="customer-heading">
          <h4>Customer Account Credit</h4>
        </div>
        <div className="customer-accnt-content">
          <Form
            name="createAccountForm"
            onFinish={onFinish}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              label="Mobile"
              name="mobile"
              rules={[
                { required: true, message: "Please enter your mobile number" },
              ]}
            >
              <Input placeholder="Enter your mobile number" />
            </Form.Item>

            <Form.Item
              label="Place"
              name="place"
              rules={[{ required: true, message: "Please enter your place" }]}
            >
              <Input placeholder="Enter your place" />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input.TextArea placeholder="Enter your address" />
            </Form.Item>

            <Form.Item
              label="Old Balance"
              name="oldBalance"
              rules={[
                { required: true, message: "Please enter your old balance" },
              ]}
            >
              <Input placeholder="Enter your old balance" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
              <Button type="primary" htmlType="submit">
                Create Account
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </InventoryLayout>
  );
};

export default CustomerAccount;
