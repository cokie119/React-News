import React from 'react';
import {Row , Col } from 'antd';//导入Row Col 的定义


export default class PCFooter extends React.Component{

	render(){
		return(
			<footer>
				<Col span={2}></Col>
				<Col span={20} class='footer'>
					&copy;&nbsp;2017 ReactNews.  All Rights Reserved
				</Col>
				<Col span={2}></Col>
			</footer>
		
		);
	};
}














