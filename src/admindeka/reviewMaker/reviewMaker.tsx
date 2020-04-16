import React from 'react';
import style from './reviewMaker.module.scss';



class ReviewMaker extends React.Component<any, any>  {

  constructor(props: any) {
    super(props)
    this.state = {
      popupOpen: false,
      currentAnswer: {
        answer: '',
        id: ''
      },
      comments: []
    }
    this.getAllComments();
  }



  getAllComments = async () => {

    let url = '/scripts/admin/get/comments.php';
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(responseJson => {
      this.setState({
        comments: responseJson
      })
    })
    .catch(error => {
      console.log(error)
    })

  }





  handleInputChange = (event: any): void => {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      currentAnswer: Object.assign({}, this.state.currentAnswer,{
        answer: value
      })
    })
    
  }





  closePopup = ():void => {
    this.setState({popupOpen: false})
  }





  putAnswer = (id: number): void => {
    this.setState({
      popupOpen: true,
      currentAnswer: {
        id: id,
        answer: ''
      }
    })
  }




  publishAnswer = async (): Promise<void> => {
    let url: string = '/scripts/admin/update/answers.php';

    this.setState({
      popupOpen: false
    })


    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(this.state.currentAnswer)
    });

    if (response.ok) {
      this.getAllComments()
    }
  }




  publishComment = async (item: any): Promise<void> => {
    let url: string = '/scripts/admin/update/publcomment.php';

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(item)
    });

    if (response.ok) {
      this.getAllComments()
    }
  }


  hideComment = async (item: any): Promise<void> => {
    let url: string = '/scripts/admin/update/hidecomment.php';

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(item)
    });

    if (response.ok) {
      this.getAllComments()
    }
  }



  public render() {
    return (
      <div className={style.reviewsMaker}>
        <div className={style.head}>
          <div className={style.number}>№</div>
          <div className={style.name}>Имя</div>
          <div className={style.review}>Отзыв</div>
          <div className={style.mark}>Оценка</div>
          <div className={style.answer}>Ответ администрации</div>
        </div>

        {this.state.comments.map((item: any, index: number) => (
          <div className={style.oneItem} key={index}>
            <div className={style.number}>{index+1}.</div>
            <div className={style.name}>{item.name_au}</div>
            <div className={style.review}>{item.text_com}</div>
            <div className={style.mark}>{item.mark}</div>
            <div className={style.answer}>{item.answer ? item.answer : "Без ответа" }</div>
            <div className={style.edit} onClick={()=>{this.putAnswer(item.id)}}>Ответить</div>
            {!(+item.approved) && <div className={style.edit} onClick={()=>{this.publishComment(item)}}>Опубликовать</div>}
            <div className={style.delete} onClick={()=>{this.hideComment(item)}}>Удалить</div>
          </div>
        ))}




        {this.state.popupOpen &&

        <div>
          <div className={style.popupMant} onClick={this.closePopup}></div>
          <div className={style.centerWrapp}>
            <div className={style.popupWindow}>

              <h1>Введите Ваш ответ</h1>

              <form>
                <div className={style.inputHolder}>
                  <div className={style.title}>Ваш ответ:</div>
                  <input type="text" name="answer" value={this.state.currentAnswer.answer} onChange={this.handleInputChange}/>
                </div>

                <div className={style.button} onClick={this.publishAnswer}>Опубликовать</div>
              </form>
            </div>
          </div>
        </div>

        }

      </div>
    );
  }
}

export default ReviewMaker;
  