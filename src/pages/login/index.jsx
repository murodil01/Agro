import { useNavigate } from "react-router-dom";
import { Button, Input, Form, message } from "antd";
import { Loader } from "lucide-react";
import { useState } from "react";

const users = [
  { username: "Admin", password: "123456", role: "admin" },
  { username: "Seller", password: "123456", role: "seller" },
  { username: "Buyer", password: "123456", role: "buyer" },
];

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = ({ username, password }) => {
    setLoading(true);

    setTimeout(() => {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate(`/${user.role}`);
      } else {
        message.error("Login yoki parol xato!");
      }

      setLoading(false);
    }, 1000);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold"
        >
          x
        </button>

        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          🌿 AgroFresh Tizimga Kirish
        </h2>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Login"
            name="username"
            rules={[{ required: true, message: "Login kiriting!" }]}
          >
            <Input placeholder="Foydalanuvchi nomi" size="large" />
          </Form.Item>
          <Form.Item
            label="Parol"
            name="password"
            rules={[{ required: true, message: "Parol kiriting!" }]}
          >
            <Input.Password placeholder="Parol" size="large" />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white w-full flex items-center justify-center"
            >
              {loading ? (
                <Loader className="animate-spin" size={20} />
              ) : (
                <>Kirish</>
              )}
            </Button>
          </Form.Item>
        </Form>

        <p className="text-xs text-center text-gray-400 mt-4">
          Foydalanuvchi: <strong>Admin</strong> / <strong>Seller</strong> /{" "}
          <strong>Buyer</strong>
          <br />
          Parol: <strong>123456</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
