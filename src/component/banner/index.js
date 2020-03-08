import React, { Component } from 'react'
import Swiper from 'swiper'
import "swiper/css/swiper.css"
import {login} from '../../api/request'
import {connect} from 'react-redux'
let mapState=(state)=>{
    return {
      state
    }
  }

  @connect(mapState)
 class Banner extends Component {
    constructor(props){
        super(props)
        this.state={
            banners:[]
        }
    }
    componentDidMount(){
        login().then(res=>{
            
           
            this.props.state.bannerReducer.banners=res.data.data.list[0].icon_list
        })

        new Swiper ('.swiper-container', {

            loop: true, // 循环模式选项，
            autoplay: {
                  delay: 2000,
                  disableOnInteraction: false,
          
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
         
        })     
    }
    render() {
      
        let {banners} =this.state
        return (
            <div className="swiper-container" style={{width:'8.6rem',height:'4rem'}}>
                <div className="swiper-wrapper" style={{width:'100%',height:'100%'}}>
                    <div className="swiper-slide"><img style={{width:'100%',height:'100%'}} src="https://img.ddimg.mobi/0ec4a32cbd84b1575892960355.jpg" alt='' /></div>
                    <div className="swiper-slide"><img style={{width:'100%',height:'100%'}} src="https://img.ddimg.mobi/d3d83d40395221575808767181.jpg" alt='' /></div>
                    <div className="swiper-slide"><img style={{width:'100%',height:'100%'}} src="https://img.ddimg.mobi/1bb411f2cd09d1575815053778.jpg" alt='' /></div>
                    <div className="swiper-slide"><img style={{width:'100%',height:'100%'}} src="https://img.ddimg.mobi/b7efb94de888d1575820057576.jpg" alt='' /></div>
                    <div className="swiper-slide"><img style={{width:'100%',height:'100%'}} src="https://img.ddimg.mobi/eb669d9799b8f1575907727553.jpg" alt='' /></div>
                    <div className="swiper-slide"><img style={{width:'100%',height:'100%'}} src="https://img.ddimg.mobi/168bff87979f11575943593312.jpg" alt='' /></div>
                    {/* {
                        banners.map((item)=>{
                            return <div className="swiper-slide" key={item.public_id}><img style={{width:'100%',height:'100%'}} src={item.icon_url} /></div>
                        })
                    } */}
                
                </div>
                {/* <!-- 如果需要分页器 --> */}
             <div className="swiper-pagination"></div>
            </div>
        )
    }
}
export default Banner