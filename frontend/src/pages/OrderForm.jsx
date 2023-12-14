// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../styles/OrderPage.css";
import { Button, Form, Input, InputNumber, Table } from "antd";
import SaveOrder from "../components/SaveOrder";
import BillPopUp from "../components/BillPopUp";

const OrderForm = () => {
  const [orderDataSource, setOrderDataSource] = useState([]);
  const [editableRow, setEditableRow] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 7; index++) {
      data.push({
        key: `${index}`,
        slNo: ` ${index + 1}`,
        item: `Item ${index}`,
        rate: `Rate ${index}`,
        quantity: `Quantity ${index}`,
        discount: `Discount ${index}`,
        total: `Total ${index}`,
      });
    }
    setOrderDataSource(data);
  }, []);

  // order form table
  const columns = [
    {
      title: "Sl. No.",
      dataIndex: "slNo",
      editable: false,
    },
    {
      title: "Item",
      dataIndex: "item",
      editable: true,
      render: (text, record) => {
        if (editableRow === record.key) {
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
      title: "Rate",
      dataIndex: "rate",
      editable: true,
      render: (text, record) => {
        if (editableRow === record.key) {
          return (
            <Form.Item
              name="rate"
              rules={[
                {
                  required: true,
                  message: "Enter the rate",
                },
              ]}
            >
              <Input style={{ width: "80px" }} />
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
        if (editableRow === record.key) {
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
              <Input style={{ width: "80px" }} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Discount",
      dataIndex: "discount",
      editable: true,
      render: (text, record) => {
        if (editableRow === record.key) {
          return (
            <Form.Item
              name="discount"
              rules={[
                {
                  required: true,
                  message: "Enter the discount",
                },
              ]}
            >
              <Input style={{ width: "80px" }} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Total",
      dataIndex: "total",
      editable: false,
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
                setEditableRow(record.key);
                form.setFieldsValue({
                  item: record.item,
                  rate: record.rate,
                  quantity: record.quantity,
                  discount: record.discount,
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

  // function for form submission
  const onFinish = (value) => {
    console.log("order form table ", value);
    console.log("values", { value });
    const updatedDataSource = orderDataSource.map((row) =>
      row.key === editableRow ? { ...row, ...value } : row
    );
    setOrderDataSource(updatedDataSource);
    setEditableRow(null);
  };
// state for save order 
  const [saveOrderPopUp,setSaveOrderPopUp] = useState(false);
//   handle save order form
  const handleSaveOrderForm =()=>{
    setSaveOrderPopUp(true);
  }  
  const closeSaveOrder = ()=>{
    setSaveOrderPopUp(false);
  }

    // useState for the bill pop up method
    const [billPopUp, setBillPopUp] = useState(false);

    const handleBillPopUp = ()=>{
      setBillPopUp(true);
    }
    const closeBillPopUp = ()=>{
      setBillPopUp(false);
    }



  return (
    <DefaultLayout>
      <div className="order-form-container">
        <div className="order-form-heading">
          <h4>Order Page</h4>
        </div>
        <div className="order-form-content">
          <div className="barcode-section">
            <input placeholder="barcode" maxLength={13} type="text" />
            <div className="Add-barcode-input">
              <input placeholder="Add barcode" maxLength={13} type="text" />
              <div className="input-btns">
                <div className="input-container">
                  <p className="quanty-para">Qnty</p>
                  <InputNumber min={1} max={10} defaultValue={1} />
                </div>
                <div className="input-container">
                  <p>dis %</p>
                  <input type="number" pattern="[0-9]*" inputMode="numeric" />
                </div>
                <div className="button-containers">
                  <button>Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="oreder-form-table">
            <Form form={form} onFinish={onFinish}>
              <Table columns={columns} dataSource={orderDataSource}></Table>
            </Form>
          </div>
          <div className="order-total-section">
              <p>Discount : </p>
              <p>Total quantity : </p>
              <p>Tax : </p>
              <p>Total Price : </p>
         </div>
         <div className="order-page-btn">
            <button onClick={handleSaveOrderForm}>Save order form</button>
            <SaveOrder saveOrderPopUp={saveOrderPopUp} closeSaveOrder={closeSaveOrder} />
            <button onClick={handleBillPopUp}>Bill</button>
            <BillPopUp billPopUp={billPopUp} closeBillPopUp={closeBillPopUp} />
         </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default OrderForm;
