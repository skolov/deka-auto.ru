import React from 'react';
import styleContacts from './contacts.module.scss';

const blacked = {
  backgroundColor: "rgb(30,30,40)"
}

export default class Contacts extends React.Component<any, any>  {


  getMap(): object{
    var DG = require('2gis-maps');
    var map = DG.map('map', {
      'center': [56.827971, 60.682478],
      'zoom': 15
    });
    DG.marker([56.827971, 60.682478]).addTo(map);
    //marker.bindPopup(popupContent).openPopup();
    return map
  }


  componentDidMount(){
    this.setState({
      map: this.getMap()
    })
  }

 
  public render() {
    return (
      <section className="clearfix" style={blacked}>
        <div className="wrapper">
          <div className={styleContacts.contacts}>

            <div className={styleContacts.side}>
              <div className={styleContacts.sideHeader}>
                <h1>Схема проезда</h1>
              </div>
              <div className={styleContacts.halfSide}>
                <p>Адрес:</p>
                <div className={styleContacts.text}>Екатеринбург, ЖБИ, Кировский район<br/>Улица: Новгородцевой, 26А</div>
                <p>Телефон:</p>
                <div className={styleContacts.text}>+7 (902) 409-51-30</div>
                <div className={styleContacts.text}>+7 (912) 284-23-82</div>
              </div>
              <div className={styleContacts.halfSide}>
                <p>Время работы:</p>
                <div>
                  <div className={styleContacts.days}>
                    Пн:<br/>
                    Вт:<br/>
                    Ср:<br/>
                    Чт:<br/>
                    Пт:<br/>
                    Сб:<br/>
                    Вс:<br/>
                  </div>
                  <div className={styleContacts.times}>
                    10:00–20:00<br/>
                    10:00–20:00<br/>
                    10:00–20:00<br/>
                    10:00–20:00<br/>
                    10:00–20:00<br/>
                    10:00–20:00<br/>
                    10:00–20:00<br/>
                  </div>
                </div>
              </div>
            </div>

            <div className={styleContacts.side}>
              <div className={styleContacts.mapContainer}>
                <div id="map"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}  