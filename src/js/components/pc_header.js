import React from 'react';
import {Row , Col } from 'antd';//导入Row Col 的定义
import { Menu, Icon, Tabs, message ,Form, Input, Button, CheckBox, Modal } from 'antd';
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;	//表单


class PCHeader extends React.Component{
	constructor(){		//构造函数一般用于 state 初始化 
		super();		//调用基类的所有的初始化方法（会去再调用一次所有的基类初始化 方法）
		this.state = {	//初始化 stata
			current:'top',	//选定当前绑定的 menu 
			modalVisible:false,	//modal 隐藏显示
			action:'login',		//按钮登录/注册
			hasLogined:false,	//是否登录
			userNickName:'',	//昵称
			userid:0			//id

		};
	}
	// 控制弹出框 显示 隐藏
	setModalVisible(value){
		this.setState({modalVisible:value})
	};
	// 点击 注册 显示注册高亮和 弹出框 ；其他情况显示被点击的高亮
	handleClick(e){
		
		if(e.key == 'register'){
			this.setState({current:'register'});
			this.setModalVisible(true);
		}else{
			
			this.setState({current: e.key})
		}
	};
	// 页面开始 想 API 提交数据
	handleSubmit(e){

	}

	render(){

		let {getFieldDecorator} = this.props.form;	//定义一个对象，接受 from表单 参数   *解构赋值
		const userShow = this.state.hasLogined ?   //如果登录了，显示昵称 * 变量是可以直接放到 html 中绘制出 dom
			<Menu.Item key="logout" class="register">
				<Button type="primary" htmlType='button'>{this.stata.userNickName}</Button>
				&nbsp;&nbsp;
				<Link target='_blank'>
					<Button type='dashed' htmlType='button'>个人中心</Button>
				</Link>
				&nbsp;&nbsp;
				<Button type='ghost' htmlType='button'>退出</Button>
			</Menu.Item> 
			 : 
			<Menu.Item key="register" >
				<Icon type='appstore'/>注册/登录
			</Menu.Item>;
		
		return(
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href = '/' class='logo'>
							<img src='./src/images/logo.png' alt='logo' />
							<span>ReactNews</span>
						</a>
					</Col> 
					<Col span={16}>
						<Menu mode="horizontal" onClick={this.handleClick.bind(this)}      selectedKeys={[this.state.current]}>
							<Menu.Item key='top'>
								<Icon type='appstore'/>头条
							</Menu.Item>
							<Menu.Item key='shehui'>
								<Icon type='appstore'/>社会
							</Menu.Item>
							<Menu.Item key='guonei'>
								<Icon type='appstore'/>国内
							</Menu.Item>
							<Menu.Item key='guoji'>
								<Icon type='appstore'/>国际
							</Menu.Item>
							<Menu.Item key='yule'>
								<Icon type='appstore'/>娱乐
							</Menu.Item>
							<Menu.Item key='tiyu'>
								<Icon type='appstore'/>体育
							</Menu.Item>
							<Menu.Item key='keji'>
								<Icon type='appstore'/>科技
							</Menu.Item>
							<Menu.Item key='shishang'>
								<Icon type='appstore'/>时尚
							</Menu.Item>
							{userShow}
						</Menu>
					</Col>
					<Col span={2}></Col>
				</Row>
			{/* 注册弹出框  */}
				<p>{this.props.say}</p>
				<Modal title='用户中心' wrapClassName='vertical-center-modal' visible={this.state.modalVisible} 
				 onCancel = { ()=> this.setModalVisible(false) } onOk = { ()=> this.setModalVisible(false)}  okText="关闭" >
				 
				 	<Tabs>
				 		<TabPane tab='注册' key='2'>
				 			<Form horizontal onSubmit = {this.handleSubmit.bind(this)} >
				 				<FormItem label='账户'>
				 					<Input placeholder = "请输入账号" {...getFieldDecorator('r_userName')} />
				 				</FormItem>

				 				<FormItem label="密码">
									<Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')}/>
								</FormItem>

								<FormItem label="确认密码">
									<Input type="password" placeholder="请再次输入您的密码" {...getFieldDecorator('r_confirmPassword')}/>
								</FormItem>

								<Button type="primary" htmlType="submit">注册</Button>

				 			</Form>
				 		</TabPane>
				 	</Tabs>

					
				</Modal>



			</header>
		);
	};
}
/*
	ant design 的表单有点特殊，需要使用 Form.create 再次构造，然后 export 出去使用
*/
export default PCHeader = Form.create({})(PCHeader)	// 表单的


















