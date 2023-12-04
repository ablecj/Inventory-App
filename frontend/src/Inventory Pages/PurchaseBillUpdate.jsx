// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import InventoryLayout from "../components/InventoryLayout";
import "../styles/purchaseBillUpdate.css";
import { Button, Form, Input, Table } from "antd";
import BarCodePopUpManual from "../PurchaseBillPopUp/BarCodePopUpManual";
import ScodePurchasePopUp from "../PurchaseBillPopUp/ScodePurchasePopUp";
import AddNewItemPurchase from "../PurchaseBillPopUp/AddNewItemPurchase";
import PurchaseCategory from "../PurchaseBillPopUp/PurchaseCategory";

const PurchaseBillUpdate = () => {
  const [form] = Form.useForm();
  const [tableData, setTableData] = useState([]);
  const [editRow, setEditRow] = useState(null);

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 7; index++) {
      data.push({
        key: `${index}`,
        slNo: ` ${index + 1}`,
        item: `Item ${index}`,
        quantity: `Quantity ${index}`,
        unit: `Unit ${index}`,
        price: `Price${index}`,
        discount: `Discount ${index}`,
        total: `Total ${index}`,
      });
    }
    setTableData(data);
  }, []);

  console.log("table Data", tableData);

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
        if (editRow === record.key) {
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
      title: "Quantity",
      dataIndex: "quantity",
      editable: true,
      render: (text, record) => {
        if (editRow === record.key) {
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
      title: "Unit",
      dataIndex: "unit",
      editable: true,
      render: (text, record) => {
        if (editRow === record.key) {
          return (
            <Form.Item
              name="unit"
              rules={[
                {
                  required: true,
                  message: "Enter the unit",
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
      title: "Product price",
      dataIndex: "price",
      editable: true,
      render: (text, record) => {
        if (editRow === record.key) {
          return (
            <Form.Item
              name="price"
              rules={[
                {
                  required: true,
                  message: "Enter the price",
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
        if (editRow === record.key) {
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
                setEditRow(record.key);
                form.setFieldsValue({
                  item: record.item,
                  quantity: record.quantity,
                  unit: record.unit,
                  price: record.price,
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

  // form submission onFinish function decleration
  const onFinish = (values) => {
    console.log("values", { values });
    const updatedDataSource = tableData.map((row) =>
      row.key === editRow ? { ...row, ...values } : row
    );
    setTableData(updatedDataSource);
    setEditRow(null);
  };

  // useState for Barcode Manually
  const [barCodePopUp, setBarCodePopUp] = useState(false);

  const handleBarcodePopUp = () => {
    setBarCodePopUp(true);
  };

  const closeBarcodePopUp = () => {
    setBarCodePopUp(false);
  };
  // scode popup inside the purchase bill
  const [scodePurchase, setScodePurchase] = useState(false);

  const handleScodePurchase = () => {
    setScodePurchase(true);
  };

  const closeScodePurchase = () => {
    setScodePurchase(false);
  };
  // add new item pop up
  const [addNewItem, setAddNewItem] = useState(false);

  const handleAddNewItem = () => {
    setAddNewItem(true);
  };
  const closeAddnewItemPurchase = () => {
    setAddNewItem(false);
  };
  // Create Category function
  const [categoryPopUp, setCategoryPopUp] = useState(false);

  const handlePurchaseCategory = () => {
    setCategoryPopUp(true);
  };
  const closeCategoryPopUp = () => {
    setCategoryPopUp(false);
  };
// vendo phone number searching button click
const handleClickSearch =()=>{
  console.log("Vendor search button clicked!")
}


// add new vendor button
const handleAddNewVendor = ()=>{
  console.log("add new vendor clicked!");
}



  return (
    <InventoryLayout>
      <div className="purchase-bill-container">
        <div className="purchase-heading">
          <h4>Purchase Bill Update</h4>
        </div>
        <div className="purchase-bill-content">
          <div className="purchaseBill-btn">
            <button>Scan item</button>
            <button onClick={handleAddNewItem}>Add new item</button>
            <button onClick={handlePurchaseCategory}>Create category</button>
            <button onClick={handleScodePurchase}>Scode</button>
            <button onClick={handleBarcodePopUp}>Barcode manually</button>
            <AddNewItemPurchase
              addNewItem={addNewItem}
              closeAddnewItemPurchase={closeAddnewItemPurchase}
            />
            <PurchaseCategory
              categoryPopUp={categoryPopUp}
              closeCategoryPopUp={closeCategoryPopUp}
            />
            <BarCodePopUpManual
              barCodePopUp={barCodePopUp}
              closeBarcodePopUp={closeBarcodePopUp}
            />
            <ScodePurchasePopUp
              scodePurchase={scodePurchase}
              closeScodePurchase={closeScodePurchase}
            />
          </div>
          <div className="purchaseBill-table">
            <Form form={form} onFinish={onFinish}>
              <Table columns={columns} dataSource={tableData}></Table>
            </Form>
          </div>
          <div className="total-section">
            <p>Discount : </p>
            <p>Tax : </p>
            <p>Total Price : </p>
          </div>
          <div className="vendor-section">
            <label htmlFor="vendorPhone">Vendor Phone Number:</label>{" "}
            {/* Label */}
            <Input
              id="vendorPhone"
              placeholder="Enter phone number"
            />{" "}
            {/* Input field */}
            <Button type="primary" onClick={handleClickSearch}>
              Search
            </Button>{" "}
            {/* Button */}
            <div className="Addnewvendor-btn">
            <Button type="primary" onClick={handleAddNewVendor} >
              Add New Vendor
            </Button>
            </div>
          </div>
        </div>
      </div>
    </InventoryLayout>
  );
};

export default PurchaseBillUpdate;
