import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Table, message } from "antd";
import { PlusCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Seller = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setProducts([...products, { ...values, key: Date.now() }]);
    message.success("Mahsulot muvaffaqiyatli qo'shildi!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const columns = [
    { title: "📦 Nomi", dataIndex: "name", key: "name" },
    { title: "💰 Narxi (so'm)", dataIndex: "price", key: "price" },
    { title: "📝 Tavsifi", dataIndex: "description", key: "description" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-start justify-center py-10 px-4">
      <div className="w-[90%] bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative">

        <div className="absolute top-6 right-6">
          <Button
            onClick={handleLogout}
            type="primary"
            danger
            icon={<LogOut size={16} className="mr-1" />}
          >
            Chiqish
          </Button>
        </div>

        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          🌿 Mahsulot qo'shish
        </h2>

        <Form layout="vertical" onFinish={onFinish} className="space-y-4">
          <Form.Item
            label="Mahsulot nomi"
            name="name"
            rules={[{ required: true, message: "Mahsulot nomi majburiy!" }]}
          >
            <Input placeholder="Masalan: Pomidor" size="large" />
          </Form.Item>

          <Form.Item
            label="Narxi (so'm)"
            name="price"
            rules={[{ required: true, message: "Narxni kiriting!" }]}
          >
            <InputNumber
              placeholder="Narxni kiriting"
              size="large"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item label="Tavsifi" name="description">
            <Input.TextArea
              placeholder="Mahsulot haqida qisqacha ma'lumot"
              rows={3}
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              icon={<PlusCircle className="mr-2" size={18} />}
              className="bg-green-600 hover:bg-green-700 text-white w-full flex justify-center items-center"
              size="large"
            >
              Qo'shish
            </Button>
          </Form.Item>
        </Form>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            📋 Qo'shilgan mahsulotlar ro'yxati
          </h3>
          <Table
            dataSource={products}
            columns={columns}
            pagination={false}
            bordered
            className="rounded-xl overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Seller;
