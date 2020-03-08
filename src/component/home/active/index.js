import React, { Component } from 'react'
import { Icon } from 'antd';
import {connect} from 'react-redux'
import actionCreator from '../../cart/actionCreator'
let mapState=(state)=>{
    return state
}
@connect(mapState,actionCreator)
class Active extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    }
    componentDidMount() {
     
        // const end = Date.parse(new Date('2020-11-29 24:00'))
        // this.countFun(end);
    }

    //卸载组件取消倒计时
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // countFun = (end) => {

    //     let now_time = Date.parse(new Date());
    //     var remaining = end - now_time;

    //     this.timer = setInterval(() => {
    //         //防止出现负数
    //         if (remaining > 1000) {
    //             remaining -= 1000;
    //             let day = Math.floor((remaining / 1000 / 3600) / 24);
    //             let hour = Math.floor((remaining / 1000 / 3600) % 24);
    //             let minute = Math.floor((remaining / 1000 / 60) % 60);
    //             let second = Math.floor(remaining / 1000 % 60);

    //             this.setState({
    //                 day: day,
    //                 hour: hour < 10 ? "0" + hour : hour,
    //                 minute: minute < 10 ? "0" + minute : minute,
    //                 second: second < 10 ? "0" + second : second
    //             })
    //         } else {
    //             clearInterval(this.timer);
    //             //倒计时结束时触发父组件的方法
    //             //this.props.timeEnd();
    //         }
    //     }, 1000);
    // }

    render() {
       
        return (
            <div className='active-time'>
                <div className='time-title'>
                    <p className='miaosha'>限时秒杀 <span className='time'> {this.state.hour}:{this.state.minute}:{this.state.second}</span></p>
                    
                     <p className='more'>更多></p>
                </div>
                <div className='miaosha-goods'>
                    <ul>
                        {
                            this.props.list.map((item,index)=>{
                                return <li key={index}>
                                <img src={item.small_image} alt='' />
                            <span>{item.product_name}</span>
                                <div className='price'>
                            <p className='nowprice'>{item.price}</p>
                            <p className='originprice'>{item.origin_price}</p>
                                    <Icon onClick={this.props.addCart.bind(this,{...item,count:1,flag:false})} style={{fontSize:'0.6rem',position:'absolute',right:'0.32rem',top:'0.05rem'}} type="shopping-cart" />
                                </div>
                            </li>
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}
export default Active