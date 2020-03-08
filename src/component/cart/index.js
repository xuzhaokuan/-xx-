import React, { Component } from 'react'
import './cart.scss'
import { connect } from 'react-redux'
import { Icon ,Modal, Button,message } from 'antd';
import actionCreator from './actionCreator'
import {getGuessYouLike} from '../../api/request'
let mapState = (state) => {
   
    return {
        state,
        length:state.cartReducer.cartList.filter((item)=>item.flag===true).length,
        allMoney(){
            let s=0
            state.cartReducer.cartList.forEach((item)=>{
                if(item.flag===true){
                    s+=parseInt(item.count)*item.price
                }
       
                
            })
            return s.toFixed(2)
        },
        allChecked(){
            if(state.cartReducer.cartList.every((item)=>item.flag===true)){
                return true
            }else{
               return false
            }
        }
    }
    
}
@connect(mapState, actionCreator)
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state={
            allFlag:false,
            likeList:[],
            visible: false
            
        }
    }
    componentDidMount() {
        this.setState({
            allFlag:this.node.checked
        })
        getGuessYouLike().then(res=>{
            if(res.status===200){
                
                this.props.state.cartReducer.likeList=res.data.data.product_list
                this.setState({
                    likeList:this.props.state.cartReducer.likeList
                })
            }
        })
       //全选按钮
       
    }
    componentDidUpdate() {
        
    }
    del=()=>{
        if(this.props.state.cartReducer.cartList.some((item)=>item.flag===true)===true){
            
            this.props.delete()
        }
    }
    showModal = () => {
        if(this.props.state.cartReducer.cartList.some((item)=>item.flag===true)){
            this.setState({
                visible: true,
              });
        }
        
      }
      handleOk = e => {
      
        this.del()
        this.setState({
          visible: false,
        });
      }
      handleCancel = e => {
     
        this.setState({
          visible: false,
        });
      }
    render() {
        let {allMoney,length,allChecked}=this.props
        return (
            <div className='cart'>
                <header><h4>购物车</h4>
                    {this.props.state.cartReducer.cartList.length===0?'':<div className='clearCart' onClick={this.showModal}>删除</div>}
                </header>
                <div className='cartWrapper'>
                
                    <div className='emptyCart' style={{display:this.props.state.cartReducer.cartList.length!==0?'none':'block'}}>
                        <img src='http://localhost:8080/img/empty.5053d452.png' alt='' />
                        <div className='cart-title'>购物车空空滴~</div>
                        <a className='goHome' href='/home'>去逛逛</a>
                    </div>
                    <div className='contentWrapper'>
                        <div className='concentWrapperList'>
                            <section>
                                {
                                    this.props.state.cartReducer.cartList.map((item) => {
                                        return <div className='shopCartList' key={item.id}>
                                            <div className='left'><input type='checkbox' onChange={this.props.checkedOne.bind(this, item)} checked={item.flag} /></div>
                                            <div className='center'>
                                                <img src={item.small_image} alt='' />
                                            </div>
                                            <div className='right'>
                                                <a>{item.name}</a>
                                                <div className='bottomContent'>
                                                    <p className='shop-price'>¥{item.price}</p>
                                                    <div className='shopDeal'>
                                                        <span onClick={this.props.decreace.bind(this, item)}>-</span>
                                                        <input type='number' value={item.count} disabled />
                                                        <span onClick={this.props.increace.bind(this, item)}>+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </section>
                        </div>

                        {/* 结算 */}
                        <div className='jiesuan' style={{display:this.props.state.cartReducer.cartList.length!==0?'block':'none'}}>
                            <div className='jiesuan_bar'>
                                <div className='checkbox'>
                                    <input type='checkbox' id='allcheck' checked={allChecked()} ref={(node)=>this.node=node}  onChange={this.props.allCheck.bind(this,this.node)} />
                                    <label htmlFor='allcheck'>全选</label>
                                </div>
                                <div className='allMoney'>
                                    <span>合计：</span>
                            <span className='all-money'>{allMoney()}</span>
                                </div>
                                <button>结算({length})</button>
                            </div>

                        </div>
                    </div>

                    {/* 猜你喜欢 */}
                    <div className='youlike'>
                        猜你喜欢
                    </div>
                    <div className='like'>
                        {
                            this.state.likeList.map((item)=>{
                            return  <div className='item' key={item.id}>
                            <img src={item.small_image} alt='' />
                        <p className='itemTitle'>{item.name}</p>
                        <p className='itemSubtitle'>{item.spec}</p>
                        <span className='price'> ¥{item.price}</span>
                        <span className='originPrice'>¥{item.origin_price}</span>
                        <div className='buyCart' onClick={this.props.addCart.bind(this,{...item,count:1,flag:false})}><Icon style={{fontSize:'20px'}} type="shopping-cart" /></div>
                        </div>
                            })
                        }
                       
                    </div>
                </div>

                <Modal
          title="温馨提示"
          okText='确认'
          cancelText='取消'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>确认删除吗？</p>
          
        </Modal>
            </div>
        )
    }
}
export default Cart