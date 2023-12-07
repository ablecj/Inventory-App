// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import InventoryLayout from "../components/InventoryLayout";
import "../styles/InventoryItems.css";
import { Button, Form, Input, Table } from "antd";
import { useForm } from "antd/es/form/Form";

const InventoryItems = () => {
  const [form] = useForm();
  const [inventoryItemData, setInventoryItemData] = useState([]);
  const [editItemRow, setEditItemRow] = useState(null);
  // staticaly adding the data using useEffect
  useEffect(() => {
    const itemData = [];
    for (let i = 0; i < 7; i++) {
      itemData.push({
        key: `${i}`,
        slNo: `${i + 1}`,
        item: `Items${i}`,
        name: `Name${i}`,
        quantity: `quantity${i}`,
        price: `price${i}`,
        selling: `selling${i}`,
      });
    }
    setInventoryItemData(itemData);
  }, []);
  console.log("inventory items Data", inventoryItemData);

  const columns = [
    {
      title: "Sl. No.",
      dataIndex: "slNo",
      editable: false,
    },
    {
      title: "Item Name",
      dataIndex: "item",
      editable: true,
      render: (text, record) => {
        if (editItemRow === record.key) {
          return (
            <Form.Item
              name="item"
              rules={[
                {
                  required: true,
                  message: "Enter the item",
                },
              ]}
            >
              <Input style={{ width: "120px" }} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      editable: true,
      render: (text, record) => {
        if (editItemRow === record.key) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Enter the name",
                },
              ]}
            >
              <Input style={{ width: "120px" }} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      editable: true,
      render: (text, record) => {
        if (editItemRow === record.key) {
          return (
            <Form.Item
              name="quantity"
              rules={[
                {
                  required: true,
                  message: "Enter the quantity",
                },
              ]}
            >
              <Input style={{ width: "120px" }} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Product Price",
      dataIndex: "price",
      editable: true,
      render: (text, record) => {
        if (editItemRow === record.key) {
          return (
            <Form.Item
              name="price"
              rules={[
                {
                  required: true,
                  message: "Enter the product price",
                },
              ]}
            >
              <Input style={{ width: "120px" }} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Customer Price",
      dataIndex: "selling",
      editable: true,
      render: (text, record) => {
        if (editItemRow === record.key) {
          return (
            <Form.Item
              name="selling"
              rules={[
                {
                  required: true,
                  message: "Enter the customer price",
                },
              ]}
            >
              <Input style={{ width: "120px" }} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Actions",
      // dataIndex: 'edit',
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEditItemRow(record.key);
                form.setFieldsValue({
                  item: record.item,
                  name: record.name,
                  quantity: record.quantity,
                  price: record.price,
                  selling: record.selling,
                });
              }}
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit">
              Save
            </Button>
          </>
        );
      },
    },
  ];
  //   fom submission function
  const onFinish = (value) => {
    console.log("list item value!", value);
    const itemsUpdatedData = inventoryItemData.map((row) =>
      row.key === editItemRow ? { ...row, ...value } : row
    );
    setInventoryItemData(itemsUpdatedData);
    setEditItemRow(null);
  };

  return (
    <InventoryLayout>
      <div className="inventory-item-container">
        <div className="inventory-item-heading">
          <h4>Inventory Items</h4>
        </div>
        <div className="inventory-content">
          <div className="search-section">
            <Input id="barcode" placeholder="Barcode Scan" />
            <Input id="scode" placeholder="scode" />
            <Button type="primary" className="search-button">
              Search
            </Button>
          </div>
          <div className="inventory-table">
            <Form form={form} onFinish={onFinish}>
              <Table columns={columns} dataSource={inventoryItemData} />
            </Form>
          </div>
        </div>
      </div>
    </InventoryLayout>
  );
};

export default InventoryItems;
