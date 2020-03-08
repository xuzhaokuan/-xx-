import React, { Component } from 'react'
import { Icon } from 'antd';
export default class JoinVip extends Component {
    render() {
        return (
            <div className='join_vip'>
                
                <span><Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />加入会员·每年预计节省806元</span>
                <i>五折开卡></i>
            </div>
        )
    }
}
