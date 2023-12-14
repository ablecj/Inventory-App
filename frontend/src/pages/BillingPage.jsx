// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../styles/billPage.css";
import { Button, Form, Input, InputNumber, Table } from "antd";
import NewCreditCustomer from "../components/NewCreditCustomer";
import SaveOrder from "../components/SaveOrder";
import PhonePopUp from "../components/PhonePopUp";
import PaymentModePopUP from "../components/PaymentModePopUP";
import BillPopUp from "../components/BillPopUp";

const BillingPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [form] = Form.useForm()

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
    setDataSource(data);
  }, []);

  // Table data
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
         render: (text,record)=>{
        if(editRow === record.key){
          return <Form.Item
            name="item"
            rules={[{
              required: true,
              message: "Enter the item"
            }]}
          >
              <Input style={{width:'120px'}} />
          </Form.Item>
        }else{
          return <p>{text}</p>
        }
      }
    },
    {
      title: "Rate",
      dataIndex: "rate",
      editable: true,
          render: (text,record)=>{
        if(editRow === record.key){
          return <Form.Item
            name="rate"
            rules={[{
              required: true,
              message: "Enter the rate"
            }]}
          >
              <Input style={{width:'80px'}} />
          </Form.Item>
        }else{
          return <p>{text}</p>
        }
      }
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      editable: true,
        render: (text,record)=>{
        if(editRow === record.key){
          return <Form.Item
            name="quantity"
            rules={[{
              required: true,
              message: "Enter the quantity"
            }]}
          >
              <Input style={{width:'80px'}} />
          </Form.Item>
        }else{
          return <p>{text}</p>
        }
      }
    },
    {
      title: "Discount",
      dataIndex: "discount",
      editable: true,
      render: (text,record)=>{
        if(editRow === record.key){
          return <Form.Item
            name="discount"
            rules={[{
              required: true,
              message: "Enter the discount"
            }]}
          >
              <Input style={{width:'80px'}} />
          </Form.Item>
        }else{
          return <p>{text}</p>
        }
      }
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
                setEditRow(record.key);
                form.setFieldsValue({
                  item: record.item,
                  rate: record.rate,
                  quantity: record.quantity,
                  discount: record.discount,
                })
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

  // form submission onFinish function decleration
  const onFinish = (values)=>{
    console.log("values", {values})
    const updatedDataSource = dataSource.map((row) =>
    row.key === editRow ? { ...row, ...values } : row
  );
  setDataSource(updatedDataSource);
  setEditRow(null);
  };

  // state for new credit customer 
  const [popupOpen, setPopupOpen] = useState(false);

  const handleNewCreditCustomer = ()=>{
    setPopupOpen(true);
  }

  const closeCreditCustomer = ()=>{
    setPopupOpen(false);
  }

  // handle save order pop up
  const [saveOrderPopUp, setSaveOrderPopUp] = useState(false);

  const handleSaveOrder = ()=>{
    setSaveOrderPopUp(true);
  }

  const closeSaveOrder = ()=>{
    setSaveOrderPopUp(false);
  }

  // useState for the phone pop up
  const [phonePopUp, setPhonePopUp] = useState(false);

  const handlePhonePopUp = ()=>{
    setPhonePopUp(true);
  }

  const closePhonePopUp = ()=>{
    setPhonePopUp(false);
  }
  // state for the payment mode 
  const [paymentPopUp, setPaymentPopUp] = useState(false);

  const handlePaymentModePopUp = ()=>{
    setPaymentPopUp(true);
  }
  const closePaymentPopUp = ()=>{
    setPaymentPopUp(false);
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
    <div className="billpage-header">
      <DefaultLayout>
        <div className="bill-container">
          <h4 className="bill-heading">Billing Page</h4>
          <div className="bill-content">
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
            <div className="billpage-table">
              <Form form={form} onFinish={onFinish}>
               <Table columns={columns} dataSource={dataSource}></Table>
              </Form>
            </div>
            <div className="total-section">
              <p>Discount : </p>
              <p>Total quantity : </p>
              <p>Tax : </p>
              <p>Total Price : </p>
            </div>
            <div className="bill-page-btn">
              <button onClick={handleNewCreditCustomer}>New Credit Customer</button>
              <button onClick={handleSaveOrder}>Save Order</button>
              <button onClick={handlePhonePopUp}>Phone</button>
              <button onClick={handlePaymentModePopUp}>Payment Mode</button>
              <button onClick={handleBillPopUp}>Bill</button>
            </div>
            {/* components for pop up */}
            <NewCreditCustomer popupOpen={popupOpen} closeCreditCustomer={closeCreditCustomer} />
            <SaveOrder saveOrderPopUp={saveOrderPopUp} closeSaveOrder={closeSaveOrder}  />
            <PhonePopUp phonePopUp={phonePopUp} closePhonePopUp={closePhonePopUp} />
            <PaymentModePopUP paymentPopUp={paymentPopUp} closePaymentPopUp={closePaymentPopUp} />
            <BillPopUp billPopUp={billPopUp} closeBillPopUp={closeBillPopUp} />
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default BillingPage;
