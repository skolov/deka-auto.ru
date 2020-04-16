import React from 'react';
import style from './reservMaker.module.scss';



export default class ReservMaker extends React.Component<any, any>  {


  constructor(props: any){
    super(props)
    this.state = {
      reservation: []
    }
    this.getAllReservation();
  }



  async getAllReservation() {
    fetch("/scripts/admin/get/getreserv.php")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(responseJson => {
        this.setState({reservation: responseJson})
      })
      .catch(error => {
        console.log(error);
      })
  }




  hideComment = async (item: any): Promise<void> => {
    let url: string = '/scripts/admin/update/hidereserv.php';

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(item)
    });

    if (response.ok) {
      this.getAllReservation()
    }
  }



  public render() {
    return (
      <div className={style.reservMaker}>

        <div className={style.head}>
          <div className={style.number}>№</div>
          <div className={style.name}>Имя</div>
          <div className={style.mail}>Почта</div>
          <div className={style.phone}>Телефон</div>
          <div className={style.about}>Проблема</div>
          <div className={style.auto}>Автомобиль</div>
        </div>



        {this.state.reservation.map((item: any, index: number) => (
          <div className={style.oneItem} key={index}>
            <div className={style.number}>{index+1}.</div>
            <div className={style.name}>{item.name}</div>
            <div className={style.mail}>{item.mail}</div>
            <div className={style.phone}>{item.phone}</div>
            <div className={style.about}>{item.about}</div>
            <div className={style.auto}>{item.mark + ' ' + item.model}</div>
            <div className={style.delete} onClick={() => {this.hideComment(item)}}>Удалить</div>
          </div>
        ))}
      </div>
    );
  }
}
  