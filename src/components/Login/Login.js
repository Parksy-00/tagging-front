import "antd/dist/antd.css"
import { Layout, Button, Divider, Form, Input, Typography} from 'antd'
import "./login.css"
import React from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography
const { Sider, Content } = Layout

export default function Login() {
    return (
        <div style={{marginTop:"30vh"}}>
            <Title style={{margin: "80px 90px 50px", textAlign:'left'}}>stolage</Title>

            <Form wrapperCol={{span: 16, offset: 4}} className="login-form">
                <Form.Item
                name="email"
                rules={[{required:true, message: "Please write your email!"}]}
                >
                    <Input placeholder="email" prefix={<UserOutlined/>}/>
                </Form.Item>

                <Form.Item
                name="password"
                rules={[{required:true, message: "Please write your password!"}]}
                >
                    <Input.Password placeholder="password" prefix={<LockOutlined/>}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" wrapperCol={{offset:6}} className="login-btn">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}