// components/LoginPage.tsx
"use client";
import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    console.log(`username`, username);
    console.log(`password`, password);
    // 移除帳號和密碼頭尾空白
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    // 確保帳號和密碼不為空值
    if (trimmedUsername && trimmedPassword) {
      // 將帳號和密碼存入 localStorage
      localStorage.setItem("user", trimmedUsername);
      localStorage.setItem("password", trimmedPassword);

      setUsername("");
      setPassword("");

      console.log("to home");
      // No need to use useRouter() here
      // Instead, you can navigate programmatically using window.location.href
      window.location.href = "/";
    } else {
      alert("請輸入帳號和密碼");
    }
  };
  // const setUserName = (values: any) => {

  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };
  return (
    <Container>
      {/* <h1>login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button> */}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={loginHandler}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default LoginPage;
