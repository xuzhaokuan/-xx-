import React, { Component } from 'react'
import './admin.scss'
import { withRouter } from 'react-router-dom'
@withRouter
 class Admin extends Component {
    go=(path)=>{
        this.props.history.push(path)
    }
    render() {
     
        return (
            <div className='admin'>
                <div className='main'>
                    {this.props.children}
                </div>
                <footer>
                    <ul className='nav' style={{backgroundColor:'white'}}>
                        <li onClick={this.go.bind(this,'/home')}>首页</li>
                        <li onClick={this.go.bind(this,'/category')}>分类</li>
                        <li onClick={this.go.bind(this,'/eat')}>吃什么</li>
                        <li onClick={this.go.bind(this,'/cart')}>购物车</li>
                        <li onClick={this.go.bind(this,'/mine')}>我的</li>
                    </ul>
                </footer>
            </div>
        )
    }
}
export default Admin