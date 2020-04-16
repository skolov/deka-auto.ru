import React from 'react';
import styleHead from './head.module.scss';
import { Link } from 'react-router-dom'

type headProps = {
  mobileMenuVisible: boolean
}

export default class Head extends React.Component<any, headProps>  {

  constructor(props: any){
    super(props)
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      mobileMenuVisible: false
    }
  }

  scrollToApp(){
    setTimeout(() => {
      let element = document.getElementById("reserv");
      if(element){
        element.scrollIntoView(true);
      }
    },400)
  }

  toggleMobileMenu(){
    this.setState(prevState => ({mobileMenuVisible: !prevState.mobileMenuVisible}))
  }

  public render() {
    return (
      <section className="clearfix" style={{backgroundColor: '#000', position: 'relative'}}>
        <div className="wrapper" style={{float: 'left', width: '100%'}}>
          <div className={styleHead.headSection}>
            <div className={styleHead.logo}>
              <img src="/logodeka.png" alt=""/>
            </div>
            <ul className={styleHead.menu}>
              <Link to="/"><li><span style={{backgroundImage: 'url(./ico/ico-home.png)'}}></span>Главная</li></Link>
              <Link to="/amenities"><li><span style={{backgroundImage: 'url(./ico/ico-service.png)'}}></span>Услуги</li></Link>
              <Link to="/appointment"><li><span style={{backgroundImage: 'url(./ico/ico-reserve.png)'}}></span>Записаться</li></Link>
              <Link to="/comment"><li><span style={{backgroundImage: 'url(./ico/ico-review.png)'}}></span>Отзывы</li></Link>
              <Link to="/contacts"><li><span style={{backgroundImage: 'url(./ico/ico-contact.png)'}}></span>Контакты</li></Link>
            </ul>
            <div className={styleHead.infoBoard}>
              <div className={styleHead.address}>Екатеринбург, ЖБИ, Кировский район<br/>Улица: Новгородцевой, 26А<br/>8 (902) 409-51-30<br/>8 (912) 284-23-82</div>
              <div className={styleHead.address}>Время работы:<br/>Пн-Вс:	10:00–20:00</div>
            </div>
            <div className={styleHead.burger} onClick={this.toggleMobileMenu}></div>
            <a href="tel:+79024095130"><div className={styleHead.callButton}></div></a>
            {this.state.mobileMenuVisible && <div className={styleHead.mobileMenu}>
              <span className={styleHead.close} onClick={this.toggleMobileMenu}></span>
              <ul>
                <Link to="/" onClick={this.toggleMobileMenu}><li><span style={{backgroundImage: 'url(./ico/ico-home.png)'}}></span>Главная</li></Link>
                <Link to="/amenities" onClick={this.toggleMobileMenu}><li><span style={{backgroundImage: 'url(./ico/ico-service.png)'}}></span>Услуги</li></Link>
                <Link to="/appointment" onClick={this.toggleMobileMenu}><li><span style={{backgroundImage: 'url(./ico/ico-reserve.png)'}}></span>Записаться</li></Link>
                <Link to="/comment" onClick={this.toggleMobileMenu}><li><span style={{backgroundImage: 'url(./ico/ico-review.png)'}}></span>Отзывы</li></Link>
                <Link to="/contacts" onClick={this.toggleMobileMenu}><li><span style={{backgroundImage: 'url(./ico/ico-contact.png)'}}></span>Контакты</li></Link>
              </ul>
            </div>}
            <div className={styleHead.mobilePre}>
              <div className={styleHead.mobilePreWall}></div>
              <h1>Автосервис</h1>
              <div className={styleHead.textAngry}>Ремонт автомобилей любой сложности</div>
              <div className={styleHead.buttonContainer}>
                <Link to="/appointment" onClick={this.scrollToApp}><div className={styleHead.button}>Записаться ></div></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
  