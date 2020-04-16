import React from 'react';
import style from './serviceMaker.module.scss';


export default class ServiceMaker extends React.Component<any, any>  {



  constructor(props: any){
    super(props)
    this.state = {
      services: [],
      popupOpen: false,
      currentItem: {
        id: '',
        service: '',
        price: '',
        display: ''
      },
      addItem: {
        id: '',
        service: '',
        price: '',
        display: 1
      },
    }
    this.getAllservices();
  }




  
  getAllservices = async () => {

    let url = '/scripts/admin/get/services.php';
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(responseJson => {
      this.setState({
        services: responseJson
      })
    })
    .catch(error => {
      console.log(error)
    })

  }




   
  handleInputChange = (event: any, add: boolean = false): void => {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const type = target.name;

    if(add) {
      this.setState({
        addItem: Object.assign({}, this.state.addItem,{
          [type]: value
        })
      })
    } else {
      this.setState({
        currentItem: Object.assign({}, this.state.currentItem,{
          [type]: value
        })
      })
    }

  }




  eventClick = async (): Promise<void> => {
    let key = this.state.services.indexOf(this.state.services.find((service: any) => service.id === this.state.currentItem.id)),
        array = this.state.services,
        url: string = '/scripts/admin/update/services.php';

    array[key] = this.state.currentItem;

    this.setState({
      services: array,
      popupOpen: false
    })

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(this.state.currentItem)
    });

    if (response.ok) {
      this.getAllservices()
    }
  }




  editItem = (item: any): void => {
    this.setState({
      popupOpen: true,
      currentItem: {
        id: item.id,
        service: item.service,
        price: item.price,
        display: item.display
      }
    })
  }





  addItem = async (): Promise<void> => {
    let arr = this.state.services,
        url: string = '/scripts/admin/put/services.php';

    arr = arr.push(this.state.addItem);

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(this.state.addItem)
    });

    this.setState({
      service: arr,
      addItem: {
        id: "",
        service: "",
        price: "",
        display: 1
      }
    })
    
    if (response.ok) {
      this.getAllservices()
    }

  }



  closePopup = ():void => {
    this.setState({popupOpen: false})
  }




  hideItem = async (item: any): Promise<void> => {
    let  url: string = '/scripts/admin/update/hideservice.php';

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(item)
    });

    if (response.ok) {
      this.getAllservices()
    }
  }

  

  

  public render() {
    return (

      <div className={style.serviceMaker}>

        <div className={style.head}>
          <div className={style.number}>№</div>
          <div className={style.service}>Наименование</div>
          <div className={style.price}>Цена</div>
        </div>

        {this.state.services.map((item: any, index: number) => (
          <div className={style.oneItem} key={index} style={{marginBottom: index === 2 ? 100 : 0}}>
            <div className={style.number}>{index+1}.</div>
            <div className={style.service}>{item.service}</div>
            <div className={style.price}>{item.price}</div>
            <div className={style.edit} onClick={()=>{this.editItem(item)}}>Редактировать</div>
            <div className={style.delete} onClick={()=>{this.hideItem(item)}}>Удалить</div>
          </div>
        ))}


        <div className={style.addPanel}>
          <h1>Добавить новую услугу</h1>
          <div className={style.inputPanel}>

            <form>
              <div className={style.inputHolder}>
                <div>Название услуги:</div>
                <input type="text" name="service" value={this.state.addItem.service} onChange={(event) => {this.handleInputChange(event, true)}}/>
              </div>

              <div className={style.inputHolder}>
                <div>Цена услуги:</div>
                <input type="text" name="price" value={this.state.addItem.price} onChange={(event) => {this.handleInputChange(event, true)}}/>
              </div>

              <div className={style.inputHolder}>
                <div className={style.add} onClick={this.addItem}>Добавить</div>
              </div>
            </form>

          </div>
        </div>


        {this.state.popupOpen &&

          <div>
            <div className={style.popupMant} onClick={this.closePopup}></div>
            <div className={style.centerWrapp}>
              <div className={style.popupWindow}>

                <h1>Произведите требуемые корректировки</h1>

                <form>
                  <div className={style.inputHolder}>
                    <div className={style.title}>Название услуги:</div>
                    <input type="text" name="service" value={this.state.currentItem.service} onChange={this.handleInputChange}/>
                  </div>

                  <div className={style.inputHolder}>
                    <div className={style.title}>Цена услуги:</div>
                    <input type="text" name="price" value={this.state.currentItem.price} onChange={this.handleInputChange}/>
                  </div>

                  <div className={style.button} onClick={this.eventClick}>Подтвердить</div>
                </form>
              </div>
            </div>
          </div>

        }

      </div>

    );
  }
}