import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';	//引入ant design
import { Button } from 'antd';	//样式组件
import PCIndex from './components/pc_index'; //pc index
import MobileIndex from './components/mobile_index';
import MedisQuery from 'react-responsive';	//媒体查询适配 （不同情况使用不同的视图）


export default class Root extends React.Component{
	render(){
		return(
			<div>
				<MedisQuery query='(min-device-width:1224px)'>
					<PCIndex></PCIndex>
				</MedisQuery>
				<MedisQuery query='(max-device-width:1224px)'>
					<MobileIndex></MobileIndex>
				</MedisQuery>
				


 

			</div>
		)
	};
}

ReactDOM.render(
	<Root/>,document.getElementById('mainContainer')
);




