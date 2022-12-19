import React from "react";

const login = () => {
  const onFinish = (values) => {
    console.log(values);
  };
};

const Login = () => {
  return (
    <div className="container text-center ">
      <h1>Login</h1>
      <div className="flex justify-center pt-10">
        <Form name="basic" onFinish={onFinish}>
          <Form.Item
            label="Tài Khoản"
            name="taiKhoan"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật Khẩu"
            name="matKhau"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default login;
