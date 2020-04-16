import React from 'react';
import styleFooter from './footer.module.scss';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component<any, any>  {
  public render() {
    return (
      <section className="clearfix" style={{background: "#000", borderTop: "1px solid #333"}}>
        <div className="wrapper">
          <div className={styleFooter.footer}>

            <div className={styleFooter.siteMap}>
              <div className={styleFooter.ingoContainer}>
                <div className={styleFooter.headItem}>Карта сайта</div>
                <ul>
                  <Link to="/"><li>Главная</li></Link>
                  <Link to="/amenities"><li>Услуги</li></Link>
                  <Link to="/appointment"><li>Записаться</li></Link>
                  <Link to="/comment"><li>Отзывы</li></Link>
                  <Link to="/contacts"><li>Контакты</li></Link>
                </ul>
              </div>
            </div>

            <div className={styleFooter.addInfo}>
              <div className={styleFooter.ingoContainer}>
                <div className={styleFooter.headItem}>Наше расположение</div>
                Екатеринбург, ЖБИ, Кировский район<br/>
                Улица: Новгородцевой, 26А <br/>
                <b style={{marginTop: "5px", float: "left"}}>8 (902) 409-51-30<br/> 8 (912) 284-23-82</b>
              </div>
            </div>


            <div className={styleFooter.timesJob}>
              <div className={styleFooter.ingoContainer}>
                <div className={styleFooter.headItem}>Время работы</div>
                <div className={styleFooter.days}>
                  Пн: 10:00–20:00<br/>
                  Вт: 10:00–20:00<br/>
                  Ср: 10:00–20:00<br/>
                  Чт: 10:00–20:00<br/>
                  Пт: 10:00–20:00<br/>
                  Сб: 10:00–20:00<br/>
                  Вс: 10:00–20:00
                </div>
              </div>
            </div>            
            
            <div className={styleFooter.dekaService}>
              <div className={styleFooter.ingoContainer}>
                <h1>DEKA Service</h1>
                <p>COPYRIGHT © 2007 - 2019 DEKA Service</p>
              </div>
            </div>

            <div className={styleFooter.sideResurces}>
              <div className={styleFooter.ingoContainer}>
                <div className={styleFooter.flexContainer}>
                  <a href="https://2gis.ru/ekaterinburg/firm/1267165677239673"><span style={{backgroundImage: "url(/ico/2gis-ico.png)"}}></span></a>
                  <a href="https://ekaterinburg.flamp.ru/firm/deka_avtoservis-1267165677239673"><span style={{backgroundImage: "url(/ico/flamp-ico.png)"}}></span></a>
                  <a href="http://ekaterinburg.avtotochki.ru/poi/view/6590123306074/"><span style={{backgroundImage: "url(/ico/apoint-ico.png)"}}></span></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
  