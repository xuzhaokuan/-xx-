import React, { Component } from 'react'
import './details.scss'
import { Icon } from 'antd';
import actionCreator from '../cart/actionCreator'
import {connect} from 'react-redux'
let mapState=(state)=>{
    return {
        state
    }
}
@connect(mapState,actionCreator)
 class DetailGoods extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
    }
    back=()=>{
        this.props.history.push('/category')
    }
    render() {
     
        let item=this.props.location.query.item
        let {addCart} = this.props
        return (
            <div className='details'>
                <div className='detail-top'>
                    <div className='detail-top-left' onClick={this.back}>
                    <Icon style={{color:'#1989fa',verticalAlign:'middle',minWidth:'0.5333rem'}} type="left" />
                    </div>
                    <div className='detail-top-right'>
                        商品详情
                    </div>
                </div>
                <div className='goodsDetail'>
                    <div className='goodsImage'>
                        <img src={item.small_image} alt='' />
                    </div>
                    <div className='productInfo'>
        <p className='title'>{item.name}</p>
        <p className='subTitle'>{item.spec}</p>
        <span className='price'>¥{item.price}</span>
        <span className='originprice'>¥{item.origin_price}</span>
        <span className='sales'>已售:{item.total_sales}</span>
                        <div className='fengexian'></div>
                        <div className='shippingInfo'>此商品按500g/份计价,如实收少于500g将退还差价</div>
                        <div className='fengexian'></div>
                        <div className='shippingInfo'>最快29分钟内送达</div>
                    </div>
                    <div className='specifications'>
                        <div className='specificationsTitle'>规格</div>
                        <div className='fengexian'></div>
                        <div className='condtions'>
                            <span>保存条件</span>
                            <span className='conditionsOne'>冷藏</span>
                        </div>
                        <div className='fengexian'></div>
                        <div className='condtions'>
                            <span>保质期</span>
                            <span className='conditionsTwo'>15天</span>
                        </div>
                        <div className='fengexian'></div>
                    </div>
                    <div className='showGoods'>
                    <img src={item.small_image} alt='' />
                        <img src='https://img.ddimg.mobi/3f280ff77ab3d1571213379189.jpg?width=750&height=1869' alt='' />
                    </div>
                    <div className='detail-bottom'>
                        <div className='goods-icon'>
                        <Icon style={{fontSize:'18px'}} type="shopping-cart" />
                        </div>
                        <button className='detail-cart' onClick={addCart.bind(this,{...item,count:1,flag:false})}>加入购物车</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailGoods