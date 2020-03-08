import React, { Component } from 'react'
import { Form, Icon, Input, Button, Card ,Tabs, message} from 'antd';
import { login2 ,login1,getCaptcha} from '../../api/request'
@Form.create()
class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      yanzhengma:''
    }
  }
  componentDidMount(){
    
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //登录
       login1(values.username,values.password).then(res=>{
         console.log(res)
         if(res.status===200){
          sessionStorage.setItem('token',res.data.data.token)
          sessionStorage.setItem('id',res.data.data.user_id)
          sessionStorage.setItem('name',res.data.data.user_name)
          message.success('注册成功')
          this.props.history.push('/home')
         }
         
       })
      }
    });
  };
  //获取验证码
  getCap=()=>{
    
    if(this.node.state.value){
      let reg=/^[1]([3-9])[0-9]{9}$/
      if(!reg.test(this.node.state.value)){
        message.warning('请输入正确的手机号')
        return
      }
      console.log(this.node2)
      
    getCaptcha(this.node.state.value).then(res=>{
      console.log(res.data.data.code)
      message.info("验证码:"+res.data.data.code)
      this.setState({
        yanzhengma:res.data.data.code
      })
    })
    }
  }
  //登录
  login=()=>{
    login2(this.node.state.value,this.state.yanzhengma).then(res=>{
      console.log(res.data)
      if(res.data.success_code===200){
        sessionStorage.setItem('token',res.data.data.token)
          sessionStorage.setItem('id',res.data.data.user_id)
          sessionStorage.setItem('name',res.data.data.user_name)
          message.success('登录成功')
          this.props.history.push('/home')
      }
    })
  }
  //退出
  logout=()=>{
    sessionStorage.clear()
    this.setState({
      yanzhengma:''
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { TabPane } = Tabs;
   
    return <div>
      {sessionStorage.getItem('token')?<div><p>{sessionStorage.getItem('name')}</p>
      <Button type="primary" onClick={this.logout} >退出登录</Button></div>
      :<Tabs defaultActiveKey="1">
    <TabPane
      tab={
        <span>
          <Icon type="apple" />
          手机验证码登录
        </span>
      }
      key="1"
      
    >
      <Card title='xx商城登录' bordered={false} className='loginclass'>
      <Input placeholder="请输入手机号" ref={(node)=>this.node=node} />
      <div style={{display:'flex',marginTop:'1rem'}}>
      <Input placeholder="请输入验证码" value={this.state.yanzhengma} ref={(node)=>this.node2=node} /> <Button type="primary" onClick={this.getCap} >获取验证码</Button>
      </div>
      <Button type="primary" style={{marginTop:'1rem'}} onClick={this.login} >登录</Button>
      </Card>
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="android" />
          注册
        </span>
      }
      key="2"
    >
      <Card title='xx商城' bordered={false} className='loginclass'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('phonenumber', {
              rules: [{ required: true, message: 'Please input your phonenumber!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Phonenumber"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                
              />,
            )}
          </Form.Item>
          <Form.Item>

            <Button type="primary" htmlType="submit" className="login-form-button">
              注册
              </Button>
          </Form.Item>
        </Form>
      </Card>
    </TabPane>
  </Tabs>}

      
    </div>
  }
}


export default Login