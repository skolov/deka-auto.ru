import React from 'react';
import style from './admindeka.module.scss';
import ReservMaker from './reservMaker/reservMaker';
import ServiceMaker from './serviceMaker/serviceMaker';
import ReviewsMaker from './reviewMaker/reviewMaker';
import ClientsMaker from './clientsMaker/clientsMaker';


const buttons = [
  {text: 'Заявки', component: <ReservMaker/>},
  {text: 'Клиенты', component: <ClientsMaker/>},
  {text: 'Услуги', component: <ServiceMaker/>},
  {text: 'Отзывы', component: <ReviewsMaker/>},
]


export default class Admindeka extends React.Component<any, any>  {

  state = {
    currentComponent: null,
    isPressed: false
  }


  toggleComponents = (component: string): any => {
    this.setState({currentComponent: component, isPressed: true})
  }


  render() {
    return (
      <div className={style.styleAdmin}>

        <div className={style.buttonsPanel}>
          {buttons.map((item: any, index: number) => (
            <div className={style.button} style={{padding: this.state.isPressed ? "5px 10px" : "50px"}} key={index} onClick={() => {this.toggleComponents(item.component)}}>
              {item.text}
            </div>
          ))}
        </div>

        {this.state.currentComponent}

      </div>
    );
  }

}
  