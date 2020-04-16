import React from 'react';
import styleReservation from './reservation.module.scss';
import ReservationForm from './reservationForm/reservationForm';

const sectionStyle = {
  borderTop: "1px solid rgba(0, 0, 0, 0.3)"
}

export default class Reservation extends React.Component<any, any>  {
  public render() {
    return (
      <section className="clearfix" style={sectionStyle}>
        <div className="wrapper">
          <div className={styleReservation.reservation}>
            <div className={styleReservation.container}>
              <div className={styleReservation.formFraming} id="reserv">
                <ReservationForm/>
              </div>
              <div className={styleReservation.addInformation}>
                <div className={styleReservation.deka}>deka Запись</div>
                <p className={styleReservation.topInfo}>Для записи на ремонт Вашего автомобиля необходимо заполнить данную форму. После получения информации, изложенной в данной форме, мы с Вами свяжемся по телефону для уточнения удобного Вам времени посещения.</p>
                <p className={styleReservation.bottomInfo}>В случае, если запись произведена после 20:00, сотрудники автоссервиса "DEKA" свяжутся с Вами утром следующего дня. Все поля обязательны для заполнения.</p>
              </div>
            </div>
          </div>
        </div>
      </section> 
    );
  }
}
  