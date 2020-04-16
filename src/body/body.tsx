import React from 'react';
import styleBody from './body.module.scss';

const bodyStyle = {
  backgroundImage: 'url(./wall.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: ''
}

class Body extends React.Component<any, any>  {
  public render() {
    return (

      <section className="clearfix" style={bodyStyle}>
        <div className="wrapper">
          <div className={styleBody.bodySection}>

            <div className={styleBody.onePartition}>
              <div className={styleBody.oneService}>
                <div className={styleBody.oneServiceInside}>
                  <div className={styleBody.iconService} style={{backgroundImage: 'url(./ico/ico1.png)'}}></div>
                  <div className={styleBody.title}>
                    Диагностика автомобиля
                  </div>
                  <div className={styleBody.transcription}>
                    Всесторонняя диагностика автомобиля перед предстоящей поездкой или покупкой
                  </div>
                </div>
              </div>

              <div className={styleBody.oneService}>
                <div className={styleBody.oneServiceInside}>
                  <div className={styleBody.iconService} style={{backgroundImage: 'url(./ico/ico2.png)'}}></div>
                  <div className={styleBody.title}>
                    Компьютерная диагностика
                  </div>
                  <div className={styleBody.transcription}>
                    Диагностика различных систем автомобиля, производящаяся блоком управления автомобиля.
                  </div>
                </div>
              </div>

              <div className={styleBody.oneService}>
                <div className={styleBody.oneServiceInside}>
                  <div className={styleBody.iconService} style={{backgroundImage: 'url(./ico/ico3.png)'}}></div>
                  <div className={styleBody.title}>
                    Замена жидкостей
                  </div>
                  <div className={styleBody.transcription}>
                    Замена всех видов жидкостей в автомобиле
                  </div>
                </div>
              </div>
            </div>

            <div className={styleBody.onePartition}>
              <div className={styleBody.oneService}>
                <div className={styleBody.oneServiceInside}>
                  <div className={styleBody.iconService} style={{backgroundImage: 'url(./ico/ico4.png)'}}></div>
                  <div className={styleBody.title}>
                    Ремонт подвески
                  </div>
                  <div className={styleBody.transcription}>
                    Диагностика всех элементов подвески автомобиля и ее ремонт
                  </div>
                </div>
              </div>

              <div className={styleBody.oneService}>
                <div className={styleBody.oneServiceInside}>
                  <div className={styleBody.iconService} style={{backgroundImage: 'url(./ico/ico5.png)'}}></div>
                  <div className={styleBody.title}>
                    Шиномонтаж
                  </div>
                  <div className={styleBody.transcription}>
                    Балансировка, вулканизация, перебортовка колес, замена элемнтов тормозной системы.
                  </div>
                </div>
              </div>

              <div className={styleBody.oneService}>
                <div className={styleBody.oneServiceInside}>
                  <div className={styleBody.iconService} style={{backgroundImage: 'url(./ico/ico6.png)'}}></div>
                  <div className={styleBody.title}>
                    Ремонт двигателей
                  </div>
                  <div className={styleBody.transcription}>
                    Диагностика и ремонт ДВС, ремонт ГБЦ, ремонт системы охлаждения
                  </div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </section>
    );
  }
}

export default Body;
  