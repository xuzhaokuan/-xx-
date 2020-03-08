import React, { Component } from 'react'
import { Tabs,Icon } from 'antd';
export default class Four extends Component {
    componentDidMount(){
        

    }
   callback=(key)=> {
        console.log(key);
      }
    render() {
        const { TabPane } = Tabs;
        
        return (
            <div className='four'>
                 <Tabs defaultActiveKey="1" onChange={this.callback}>
    <TabPane tab="全部" key="1">
      <ul style={{backgroundColor:'#f5f5f5',height:'auto',paddingLeft:'2%',paddingTop:'0.27rem'}}>
          <li style={{width:'48%',position:'relative',display:'inline-block',marginRight:'2%',marginBottom:'0.27rem',backgroundColor:'white',borderRadius:'0.16rem',paddingBottom:'0.32rem',textAlign:'left'}}>
              <img style={{width:'100%',height:'100%',backgroundSize:'contain'}} src='https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list' alt='' />
              <p style={{padding:'0 0.27rem',lineHeight:'0.533rem',fontSize:'0.28rem',wordBreak:'break-all',overflow:'hidden',textOverflow:'ellipsis'}}>康师傅大食代红烧牛肉面 5包/袋</p>
              <p style={{padding:'0.1rem 0.27rem 0 0.27rem',color:'gray',fontSize:'9px',lineHeight:'0.27rem',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',wordBreak:'break-all',marginBottom:'0.8rem'}}>124g*5包 大块满足 畅快分享</p>
              <span style={{paddingLeft:'0.27rem',color:'#f37078',fontSize:'0.49rem'}}>¥15.90</span>
              <span style={{fontSize:'0.367rem',color:'#999999',textDecoration:'line-through'}}>¥15.90</span>
              <Icon style={{fontSize:'0.7rem'}} type="shopping-cart" />
          </li>
          <li style={{width:'48%',position:'relative',display:'inline-block',marginRight:'2%',marginBottom:'0.27rem',backgroundColor:'white',borderRadius:'0.16rem',paddingBottom:'0.32rem',textAlign:'left'}}>
              <img style={{width:'100%',height:'100%',backgroundSize:'contain'}} src='https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list' alt='' />
              <p style={{padding:'0 0.27rem',lineHeight:'0.533rem',fontSize:'0.28rem',wordBreak:'break-all',overflow:'hidden',textOverflow:'ellipsis'}}>康师傅大食代红烧牛肉面 5包/袋</p>
              <p style={{padding:'0.1rem 0.27rem 0 0.27rem',color:'gray',fontSize:'9px',lineHeight:'0.27rem',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',wordBreak:'break-all',marginBottom:'0.8rem'}}>124g*5包 大块满足 畅快分享</p>
              <span style={{paddingLeft:'0.27rem',color:'#f37078',fontSize:'0.49rem'}}>¥15.90</span>
              <span style={{fontSize:'0.367rem',color:'#999999',textDecoration:'line-through'}}>¥15.90</span>
              <Icon style={{fontSize:'0.7rem'}} type="shopping-cart" />
          </li>
      </ul>
    </TabPane>
    <TabPane tab="晚餐" key="2">
    <ul style={{backgroundColor:'#f5f5f5',height:'auto',paddingLeft:'2%',paddingTop:'0.27rem'}}>
          <li style={{width:'48%',position:'relative',display:'inline-block',marginRight:'2%',marginBottom:'0.27rem',backgroundColor:'white',borderRadius:'0.16rem',paddingBottom:'0.32rem',textAlign:'left'}}>
              <img style={{width:'100%',height:'100%',backgroundSize:'contain'}} src='https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list' alt='' />
              <p style={{padding:'0 0.27rem',lineHeight:'0.533rem',fontSize:'0.28rem',wordBreak:'break-all',overflow:'hidden',textOverflow:'ellipsis'}}>康师傅大食代红烧牛肉面 5包/袋</p>
              <p style={{padding:'0.1rem 0.27rem 0 0.27rem',color:'gray',fontSize:'9px',lineHeight:'0.27rem',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',wordBreak:'break-all',marginBottom:'0.8rem'}}>124g*5包 大块满足 畅快分享</p>
              <span style={{paddingLeft:'0.27rem',color:'#f37078',fontSize:'0.49rem'}}>¥15.90</span>
              <span style={{fontSize:'0.367rem',color:'#999999',textDecoration:'line-through'}}>¥15.90</span>
              <Icon style={{fontSize:'0.7rem'}} type="shopping-cart" />
          </li>
          <li style={{width:'48%',position:'relative',display:'inline-block',marginRight:'2%',marginBottom:'0.27rem',backgroundColor:'white',borderRadius:'0.16rem',paddingBottom:'0.32rem',textAlign:'left'}}>
              <img style={{width:'100%',height:'100%',backgroundSize:'contain'}} src='https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list' alt='' />
              <p style={{padding:'0 0.27rem',lineHeight:'0.533rem',fontSize:'0.28rem',wordBreak:'break-all',overflow:'hidden',textOverflow:'ellipsis'}}>康师傅大食代红烧牛肉面 5包/袋</p>
              <p style={{padding:'0.1rem 0.27rem 0 0.27rem',color:'gray',fontSize:'9px',lineHeight:'0.27rem',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',wordBreak:'break-all',marginBottom:'0.8rem'}}>124g*5包 大块满足 畅快分享</p>
              <span style={{paddingLeft:'0.27rem',color:'#f37078',fontSize:'0.49rem'}}>¥15.90</span>
              <span style={{fontSize:'0.367rem',color:'#999999',textDecoration:'line-through'}}>¥15.90</span>
              <Icon style={{fontSize:'0.7rem'}} type="shopping-cart" />
          </li>
      </ul>
    </TabPane>
    <TabPane tab="人气" key="3">
    <ul style={{backgroundColor:'#f5f5f5',height:'auto',paddingLeft:'2%',paddingTop:'0.27rem'}}>
          <li style={{width:'48%',position:'relative',display:'inline-block',marginRight:'2%',marginBottom:'0.27rem',backgroundColor:'white',borderRadius:'0.16rem',paddingBottom:'0.32rem',textAlign:'left'}}>
              <img style={{width:'100%',height:'100%',backgroundSize:'contain'}} src='https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list' alt='' />
              <p style={{padding:'0 0.27rem',lineHeight:'0.533rem',fontSize:'0.28rem',wordBreak:'break-all',overflow:'hidden',textOverflow:'ellipsis'}}>康师傅大食代红烧牛肉面 5包/袋</p>
              <p style={{padding:'0.1rem 0.27rem 0 0.27rem',color:'gray',fontSize:'9px',lineHeight:'0.27rem',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',wordBreak:'break-all',marginBottom:'0.8rem'}}>124g*5包 大块满足 畅快分享</p>
              <span style={{paddingLeft:'0.27rem',color:'#f37078',fontSize:'0.49rem'}}>¥15.90</span>
              <span style={{fontSize:'0.367rem',color:'#999999',textDecoration:'line-through'}}>¥15.90</span>
              <Icon style={{fontSize:'0.7rem'}} type="shopping-cart" />
          </li>
          <li style={{width:'48%',position:'relative',display:'inline-block',marginRight:'2%',marginBottom:'0.27rem',backgroundColor:'white',borderRadius:'0.16rem',paddingBottom:'0.32rem',textAlign:'left'}}>
              <img style={{width:'100%',height:'100%',backgroundSize:'contain'}} src='https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list' alt='' />
              <p style={{padding:'0 0.27rem',lineHeight:'0.533rem',fontSize:'0.28rem',wordBreak:'break-all',overflow:'hidden',textOverflow:'ellipsis'}}>康师傅大食代红烧牛肉面 5包/袋</p>
              <p style={{padding:'0.1rem 0.27rem 0 0.27rem',color:'gray',fontSize:'9px',lineHeight:'0.27rem',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',wordBreak:'break-all',marginBottom:'0.8rem'}}>124g*5包 大块满足 畅快分享</p>
              <span style={{paddingLeft:'0.27rem',color:'#f37078',fontSize:'0.49rem'}}>¥15.90</span>
              <span style={{fontSize:'0.367rem',color:'#999999',textDecoration:'line-through'}}>¥15.90</span>
              <Icon style={{fontSize:'0.7rem'}} type="shopping-cart" />
          </li>
      </ul>
    </TabPane>
    <TabPane tab="心选" key="4">
    <ul style={{backgroundColor:'#f5f5f5',height:'auto',paddingLeft:'2%',paddingTop:'0.27rem'}}>
          <li style={{width:'48%',position:'relative',display:'inline-block',marginRight:'2%',marginBottom:'0.27rem',backgroundColor:'white',borderRadius:'0.16rem',paddingBottom:'0.32rem',textAlign:'left'}}>
              <img style={{width:'100%',height:'100%',backgroundSize:'contain'}} src='https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list' alt='' />
              <p style={{padding:'0 0.27rem',lineHeight:'0.533rem',fontSize:'0.28rem',wordBreak:'break-all',overflow:'hidden',textOverflow:'ellipsis'}}>康师傅大食代红烧牛肉面 5包/袋</p>
              <p style={{padding:'0.1rem 0.27rem 0 0.27rem',color:'gray',fontSize:'9px',lineHeight:'0.27rem',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',wordBreak:'break-all',marginBottom:'0.8rem'}}>124g*5包 大块满足 畅快分享</p>
              <span style={{paddingLeft:'0.27rem',color:'#f37078',fontSize:'0.49rem'}}>¥15.90</span>
              <span style={{fontSize:'0.367rem',color:'#999999',textDecoration:'line-through'}}>¥15.90</span>
              <Icon style={{fontSize:'0.7rem'}} type="shopping-cart" />
          </li>
          <li style={{width:'48%',position:'relative',display:'inline-block',marginRight:'2%',marginBottom:'0.27rem',backgroundColor:'white',borderRadius:'0.16rem',paddingBottom:'0.32rem',textAlign:'left'}}>
              <img style={{width:'100%',height:'100%',backgroundSize:'contain'}} src='https://img.ddimg.mobi/product/73729284b788d1558072397291.jpg!deliver.product.list' alt='' />
              <p style={{padding:'0 0.27rem',lineHeight:'0.533rem',fontSize:'0.28rem',wordBreak:'break-all',overflow:'hidden',textOverflow:'ellipsis'}}>康师傅大食代红烧牛肉面 5包/袋</p>
              <p style={{padding:'0.1rem 0.27rem 0 0.27rem',color:'gray',fontSize:'9px',lineHeight:'0.27rem',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',wordBreak:'break-all',marginBottom:'0.8rem'}}>124g*5包 大块满足 畅快分享</p>
              <span style={{paddingLeft:'0.27rem',color:'#f37078',fontSize:'0.49rem'}}>¥15.90</span>
              <span style={{fontSize:'0.367rem',color:'#999999',textDecoration:'line-through'}}>¥15.90</span>
              <Icon style={{fontSize:'0.7rem'}} type="shopping-cart" />
          </li>
      </ul>
    </TabPane>
  </Tabs>
            </div>
        )
    }
}
