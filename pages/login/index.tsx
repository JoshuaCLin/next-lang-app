import { useState } from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import Head from "next/head";


const Container = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername && trimmedPassword) {
      localStorage.setItem("user", trimmedUsername);
      localStorage.setItem("password", trimmedPassword);

      setUsername("");
      setPassword("");

      window.location.href = "/";
    } else {
      alert("請輸入帳號和密碼");
    }
  };

  return (
    <Container>
      <Head>
        <title>多語系登入頁面</title>
      </Head>
      <h1>語言包管理系統</h1>
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "20px auto" }}
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;





