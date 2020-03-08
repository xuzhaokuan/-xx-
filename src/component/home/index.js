import React, { Component } from 'react'
import './home.scss'
import { Input,Icon } from 'antd';
import Banner from '../banner'
import {connect} from 'react-redux'
import actionCreator from './actionCreator'
import JoinVip from './join-vip'
import Active from './active'
import Four from './four'
import {login,getSpecial} from '../../api/request'
import PubSub from "pubsub-js"
let mapState=(state)=>{
   
    return {
      state
    }
  }
  @connect(mapState,actionCreator)
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            // homeCategory:this.props.state.homeReducer.homeCategory
        }
    }
    componentDidMount(){
        
        login().then(res=>{
        this.props.homeCategoryAction(res.data.data.list[2].icon_list)
        this.props.homeMiaoShaAction(res.data.data.list[3].product_list)    
        })
        // getSpecial().then(res=>{
        //     console.log(res.data)
        // })
    }
    goCategory=(index)=>{
        console.log(1)
        this.props.history.push('/category',{query:{index:index}})
    }
    render() {
        // console.log(this.props.state.homeReducer.miaoshaList)
        const { Search } = Input;
        return (
            <div className='home'>
                <header>
                    <div className='location'>
                    <Icon type="environment" />
                    正在获取当前位置
                    </div>
                    <Search
                        placeholder="请输入商品名称"
                        onSearch={value => console.log(value)}
                        style={{margin:'0.2rem 0 0 0.4rem',height:'0.8rem'}}
                    />
                </header>
                <div className='home_main'>
                    <Banner />
                    
                    <div className='tedian' style={{display:"flex",justifyContent:'space-around'}}>
                        <p>
                        <Icon type="alipay-circle" style={{fontSize:'16px'}} />
                        <span>最快30分钟内送达</span>
                        </p>
                        <p>
                        <Icon type="github" style={{fontSize:'16px'}} />
                        <span>0元起送 0配送费</span>
                        </p>
                        <p>
                        <Icon type="qq" style={{fontSize:'16px'}} />
                        <span>安心退</span>
                        </p>
                    </div>
                    <div className='active_img'>
                        <img src='http://518taole.7-orange.cn/homead2.gif' />
                    </div>
                    <div className='home-category'>
                        <ul>
                           {
                               this.props.state.homeReducer.homeCategory.map((item,index)=>{
                                   return  <li key={index} onClick={this.goCategory.bind(this,index)}>
                                   <div>
                                       <img src={item.icon_url} alt='' />
                                        <span>{item.name}</span>
                                   </div>
                               </li>
                               })
                           }
                        </ul>
                    </div>
                    <JoinVip />
                    <Active list={this.props.state.homeReducer.miaoshaList} />
                    <Four />
                </div>
            </div>
        )
    }
}
export default Home