import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { registerAction } from "./redux/action";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      await dispatch(registerAction(values));
      navigate("/login");
    } catch (err) {
      console.log(err.response.data.content);
    }
  };
  return (
    <div className="containter text-center">
      <Form name="basic" onFinish={handleRegister}>
        <Form.Item
          label="Tài Khoản"
          name="taiKhoan"
          rules={[{ required: true, message: "Hãy điền tài khoản !." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật Khẩu"
          name="matKhau"
          rules={[{ required: true, message: "Hãy điền mật khẩu !." }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng cung cấp email của bạn." },
            {
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email không hợp lệ",
            },
          ]}
        >
          <Input.Email />
        </Form.Item>
        <Form.Item
          label="Số ĐT"
          name="soDt"
          rules={[
            {
              required: true,
              message: "Vui lòng cung cấp số điện thoại của bạn.",
            },
          ]}
        >
          <Input.Phonenumber />
        </Form.Item>
        <Form.Item
          label="Mã Nhóm"
          name="maNhom"
          rules={[
            { required: true, message: "Xin hãy cung cấp mã nhóm của bạn." },
          ]}
        >
          <Input.Manhom />
        </Form.Item>
        <Form.Item
          label="Họ Tên"
          name="hoTen"
          rules={[
            { required: true, message: "Hãy điền họ tên đầy đủ của bạn." },
          ]}
        ></Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          Login
        </NavLink>
      </Form>
    </div>
  );
};

export default Signup;
