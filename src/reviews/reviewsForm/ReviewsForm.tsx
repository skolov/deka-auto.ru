import React from 'react';
import InputText from '../../inputs/text/text';
import Textarea from '../../inputs/textarea/textarea';
import styleReviews from '../reviews.module.scss';
import MarkStarts from '../reviewsForm/mark/mark'

export default class ReviewsForm extends React.Component<any, any>  {



  state = {
    senderStatus: false,
    showWarning: false,
    data:{
      name: '',
      description: '',
      mark: '',
      date: '',
    },
    errors: {
      name: true,
      description: true,
    },
    errorsTexts:{
      name: "Имя введено некорректно!",
      description: "Описание введено некорректно!",
    }
  }



  handleInputChange = (event: any): void => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const type = target.name;
    this.setState({
      data: Object.assign({}, this.state.data,{
        [type]: value
      })
    })
    this.checkValid({type, value})
  }



  handleMarkChange = (mark: number): void => {
    this.setState({
      data: Object.assign({}, this.state.data,{
        mark: mark
      })
    })
  }



  checkValid = ({ type, value }: { type: string; value: string; }): void => {
    let regExp: any = {
      'name': /^[a-zA-Zа-яА-ЯЁ0-9\s]{3,100}$/, // eslint-disable-next-line
      'description': /^[a-zA-Zа-яА-ЯЁё0-9!\-'/:();.,*_+=\s]{5,2000}$/// eslint-disable-next-line
    }
    this.setState({
      errors: Object.assign({}, this.state.errors, {
        [type]: value.match(regExp[type]) ? true : false
      })
    })
  }



  handlerClickAdd = (): void => {
    function getCurrentDate(): string {
      let date = new Date(),
          day = date.getDate(),
          month = date.getMonth(),
          year = date.getFullYear();
      return ++month + '.' + day + '.' + year;
    }
    this.setState({
      data: Object.assign({}, this.state.data, {
        date: getCurrentDate()
      })
    }, () => {
      this.sendData()
    })
  }


    
  handlerInputKeyDown = (): void => {
    this.setState({showWarning: false})
  }



  checkForEmptiness = (): boolean => {
    let arr: Array<string> = Object.values(this.state.data),
        decision: boolean = arr.includes('') ? true : false;
    this.setState({showWarning: decision})
    return decision;
  }



  checkForErrors = ():boolean => {
    let arr: Array<boolean> = Object.values(this.state.errors),
        decision: boolean = arr.includes(false) ? true : false;
    this.setState({showWarning: decision})
    return decision;
  }



  sendData = async (): Promise<void> => {
    let url = '/scripts/newreview.php';
    if(!this.checkForEmptiness() && !this.checkForErrors()){
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.state.data)
      });

      if (response.ok) {
        this.setState({senderStatus: true});
      } else {
        // Обработка 
      }
    }
  }



  public render() {
    return (
      <form>
        <div className={styleReviews.formComment}>
        
          <div className={styleReviews.formBody}>

            <div className={styleReviews.textContainer}>
              С помощью данной формы Вы можете отсавить свое мнение о качестве работы автосервиса "ДЕКА".
            </div>

            <div className={styleReviews.inputContainer}>
              <InputText 
                placeholder="Введите Ваше имя"
                name="name"
                updateStateProp={this.handleInputChange}
                getKeyDown={this.handlerInputKeyDown}
                data={{
                  "value": this.state.data.name,
                  "error": this.state.errors.name,
                  "errorText": this.state.errorsTexts.name,
                }} 
              />
            </div>

            <div className={styleReviews.inputContainer}>
              <Textarea
                placeholder="Ваше мнение о сервисе DEKA"
                name="description"
                updateStateProp={this.handleInputChange} 
                getKeyDown={this.handlerInputKeyDown}
                data={{
                  "value": this.state.data.description,
                  "error": this.state.errors.description,
                  "errorText": this.state.errorsTexts.description,
                }}
              />
            </div>

            <div className={styleReviews.inputContainer}>
              <div className={styleReviews.textPale}>
                Поставьте нам оценку
              </div>
              <MarkStarts
                value={this.state.data.mark}
                updateStateProp={this.handleMarkChange}
                getKeyDown={this.handlerInputKeyDown}
              />
            </div>

          </div>

          <div className={styleReviews.formFooter}>
            <div className={styleReviews.button} onClick={this.handlerClickAdd}> Добавить</div>
            {this.state.showWarning && 
                <div style={{color: "red", fontSize: "12px", margin: "5px 20px", float: "left"}}>Необходимо корректно заполнить все поля!</div>}
          </div>
          
          {this.state.senderStatus && 
            <div className={styleReviews.reviewed}>
              <div>
                <p>Ваш отзыв принят в обработку. Вы сможете увидеть его после проверки модератором.</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="green"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                </span>
              </div>
            </div>
          }
        </div>
      </form>
    );
  }
}
