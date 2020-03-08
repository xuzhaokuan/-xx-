import React, { Component } from 'react'
import './category.scss'
import { Input, Icon } from 'antd';
import { connect } from 'react-redux'
import actionCreator from '../cart/actionCreator'
import { getCategory, categoriesDetail } from '../../api/request'

let mapState = (state) => {

    return {
        state
    }
}
@connect(mapState, actionCreator)
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        // console.log(this.props.location.state.query.index)
        
       if(this.props.location.state===undefined){
        
         //默认显示第一个分类
         categoriesDetail('/lk001').then(res => {

            this.setState({
                list: res.data.data.cate
            })
        })
       }else{
        let param;
        if (this.props.location.state.query.index >= 10) {
            param = `/lk0${this.props.location.state.query.index + 1}`;
        } else {
            param = `/lk00${this.props.location.state.query.index + 2}`;
        }
        categoriesDetail(param).then(res => {

            this.setState({
                list: res.data.data.cate
            })
        })
       }
        //获取分类
        getCategory().then(res => {

            if (res.status === 200) {
                this.props.categoryAction(res.data.data.cate)

            }
        })
       

    }
    detial = (index) => {
        let param;
        if (index >= 9) {
            param = `/lk0${index + 1}`;
        } else {
            param = `/lk00${index + 1}`;
        }
        categoriesDetail(param).then(res => {

            this.setState({
                list: res.data.data.cate
            })
        })
    }
    go = (item) => {
        this.props.history.push({ pathname: '/detail', query: { item: item } })
    }
    addcart=(item,e)=>{
        e.stopPropagation();
        this.props.addCart(item)
    }
    render() {
      
        const { Search } = Input;
        let { list } = this.state
        return (
            <div className='category'>
                <div className='category-header'>
                    <Search
                        placeholder="请输入商品名称"
                        onSearch={value => console.log(value)}
                        style={{ margin: '0.3rem 0', height: '0.8rem', width: '80%' }}
                    />
                </div>
                <div className='category-main'>
                    <div className='category-aside'>
                        <ul>
                            {
                                this.props.state.categoryReducer.category.map((item, index) => {
                                    return <li key={item.id} onClick={this.detial.bind(this, index)}>
                                        <span>{item.name}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='category-content'>
                        <div className='r-list'>
                            {
                                list.map((item) => {
                                    return <div key={item.id}>
                                        <p style={{ backgroundColor: 'gray' }}>{item.name}</p>
                                        <ul>
                                            {
                                                item.products.map((item1, index) => {
                                                    return <li key={item1.id} onClick={this.go.bind(this, item1)}>
                                                        <div className='item'>
                                                            <p>
                                                                <img src={item1.small_image} alt='' />
                                                            </p>
                                                            <div className='item-right'>
                                                                <p className='item-name'>{item1.product_name}</p>
                                                                <p className='item-desc'>质地细嫩 色香味均优于其他普通豆腐</p>
                                                                <p className='item-price'>¥{item1.price}</p>
                                                                <p className='item-originprice'>¥{item1.origin_price}</p>
                                                                <Icon style={{ fontSize: '0.7rem' }} onClick={this.addcart.bind(this,item1)} type="shopping-cart" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Category