import { Button, Form, Input } from "antd";
import React from "react";

const register = () => {
  const onFinish = (values) => {
    console.log(values);
  };
};

const Register = () => {
  return (
    <div className="container text-center">
      <h1>Register</h1>
      <div className="flex justify-center pt-10">
        <Form name="basic" onFinish={onFinish}>
          <Form.Item
            label="Tài Khoản"
            name="taiKhoan"
            rules={[
              { required: true, message: "Please fill in your username." },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật Khẩu"
            name="matKhau"
            rules={[
              { required: true, message: "Please fill in your password." },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please provide your email address." },
            ]}
          >
            <Input.Email />
          </Form.Item>
          <Form.Item
            label="Số ĐT"
            name="soDt"
            rules={[
              { required: true, message: "Please provide your phone number." },
            ]}
          >
            <Input.Phonenumber />
          </Form.Item>
          <Form.Item
            label="Mã Nhóm"
            name="maNhom"
            rules={[
              { required: true, message: "Please provide your group code." },
            ]}
          >
            <Input.Manhom />
          </Form.Item>
          <Form.Item
            label="Họ Tên"
            name="hoTen"
            rules={[
              { required: true, message: "Please fill in your fullname." },
            ]}
          ></Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default register;
