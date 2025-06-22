import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Table,
  Avatar,
  Tag,
  Modal,
  Button,
  Popconfirm,
  Input,
  Form,
  message,
  Tooltip,
} from "antd";
import {
  Users,
  ShoppingBag,
  UserCheck,
  UserPlus,
  BarChart2,
  Edit,
  Trash2,
  PlusCircle,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [detailsModal, setDetailsModal] = useState(false);
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("admin_users");
    return saved
      ? JSON.parse(saved)
      : [
          {
            key: 1,
            name: "Ali Valiyev",
            role: "Sotuvchi",
            joined: "2025-06-20",
            phone: "+99890 123-45-67",
            address: "Toshkent, Chilonzor",
          },
          {
            key: 2,
            name: "Gulnoza Karimova",
            role: "Haridor",
            joined: "2025-06-21",
            phone: "+99891 765-43-21",
            address: "Samarqand, Registon",
          },
          {
            key: 3,
            name: "Islom Abdullayev",
            role: "Sotuvchi",
            joined: "2025-06-19",
            phone: "+99893 999-88-77",
            address: "Buxoro, G'ijduvon",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("admin_users", JSON.stringify(users));
  }, [users]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const deleteUser = (key) => {
    setUsers((prev) => prev.filter((u) => u.key !== key));
    message.success("Foydalanuvchi o'chirildi");
  };

  const showDetails = (user) => {
    setSelectedUser(user);
    setDetailsModal(true);
  };

  const handleAddOrEdit = () => {
    form.validateFields().then((values) => {
      if (isEditMode) {
        setUsers((prev) =>
          prev.map((u) =>
            u.key === selectedUser.key ? { ...u, ...values } : u
          )
        );
        message.success("Foydalanuvchi tahrirlandi");
      } else {
        const newUser = {
          ...values,
          key: Date.now(),
        };
        setUsers((prev) => [...prev, newUser]);
        message.success("Foydalanuvchi qo'shildi");
      }

      setModalOpen(false);
      setIsEditMode(false);
      form.resetFields();
    });
  };

  const stats = [
    {
      title: "Foydalanuvchilar",
      icon: <Users size={28} className="text-blue-500" />,
      value: users.length,
    },
    {
      title: "Mahsulotlar",
      icon: <ShoppingBag size={28} className="text-green-500" />,
      value: 76,
    },
    {
      title: "Sotuvchilar",
      icon: <UserCheck size={28} className="text-purple-500" />,
      value: users.filter((u) => u.role === "Sotuvchi").length,
    },
    {
      title: "Haridorlar",
      icon: <UserPlus size={28} className="text-orange-500" />,
      value: users.filter((u) => u.role === "Haridor").length,
    },
  ];

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: "Ismi",
      dataIndex: "name",
      render: (text, record) => (
        <div
          className="flex items-center gap-2 cursor-pointer hover:underline"
          onClick={() => showDetails(record)}
        >
          <Avatar>{text.charAt(0)}</Avatar>
          {text}
        </div>
      ),
    },
    {
      title: "Roli",
      dataIndex: "role",
      render: (role) => (
        <Tag color={role === "Sotuvchi" ? "green" : "blue"}>{role}</Tag>
      ),
    },
    {
      title: "Qo'shilgan sana",
      dataIndex: "joined",
    },
    {
      title: "Amallar",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<Edit size={16} />}
            onClick={() => {
              form.setFieldsValue(record);
              setSelectedUser(record);
              setIsEditMode(true);
              setModalOpen(true);
            }}
          />
          <Popconfirm
            title="Ishonchingiz komilmi?"
            onConfirm={() => deleteUser(record.key)}
          >
            <Button danger icon={<Trash2 size={16} />} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <BarChart2 size={30} className="text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            Admin Boshqaruv Paneli
          </h2>
        </div>
        <Tooltip title="Chiqish">
          <LogOut
            onClick={handleLogout}
            className="text-gray-600 cursor-pointer hover:text-red-500"
            size={24}
          />
        </Tooltip>
      </div>

      <Row gutter={[16, 16]} className="mb-10">
        {stats.map((stat, i) => (
          <Col xs={24} sm={12} md={6} key={i}>
            <Card bordered={false} className="rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-full">{stat.icon}</div>
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-xl font-semibold">{stat.value}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <Input
          placeholder="Foydalanuvchi qidirish..."
          className="w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          type="primary"
          icon={<PlusCircle size={18} />}
          onClick={() => {
            form.resetFields();
            setSelectedUser(null);
            setIsEditMode(false);
            setModalOpen(true);
          }}
          className="w-full sm:w-auto"
        >
          Foydalanuvchi qo'shish
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Card>
          <Table
            dataSource={filteredUsers}
            columns={columns}
            pagination={false}
          />
        </Card>
      </div>

      <Modal
        open={modalOpen}
        title={
          isEditMode
            ? "✏️ Foydalanuvchini tahrirlash"
            : "📝 Yangi foydalanuvchi qo'shish"
        }
        onCancel={() => {
          setModalOpen(false);
          setIsEditMode(false);
          form.resetFields();
        }}
        onOk={handleAddOrEdit}
        okText={isEditMode ? "Saqlash" : "Qo'shish"}
        cancelText="Bekor qilish"
        style={{ maxWidth: "90vw" }}
      >
        <Form layout="vertical" form={form}>
          <Form.Item label="Ismi" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Roli" name="role" rules={[{ required: true }]}>
            <Input placeholder="Sotuvchi yoki Haridor" />
          </Form.Item>
          <Form.Item
            label="Qo'shilgan sana"
            name="joined"
            rules={[{ required: true }]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Telefon" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Manzil" name="address">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={detailsModal}
        title="📋 Foydalanuvchi Tafsilotlari"
        footer={null}
        onCancel={() => setDetailsModal(false)}
        style={{ maxWidth: "90vw" }}
      >
        {selectedUser && (
          <div className="space-y-2 text-[16px]">
            <p>
              <strong>Ismi:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Roli:</strong> {selectedUser.role}
            </p>
            <p>
              <strong>Sana:</strong> {selectedUser.joined}
            </p>
            <p>
              <strong>Telefon:</strong> {selectedUser.phone}
            </p>
            <p>
              <strong>Manzil:</strong> {selectedUser.address}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Admin;
