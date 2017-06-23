import React from 'react';
import PCHeader from './pc_header'
import {Row , Col } from 'antd';//导入Row Col 的定义
import PCFooter from './pc_footer';
export default class PCIndex extends React.Component{
	render(){
		return(
			<div>
				<PCHeader></PCHeader>
				<PCFooter></PCFooter>
			</div>
		);
	};
}

