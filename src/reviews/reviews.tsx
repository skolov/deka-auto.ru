import React from 'react';
import styleReviews from './reviews.module.scss';
import shad from '../shad.svg';
import ReviewsForm from './reviewsForm/ReviewsForm';

/*

const CONTENT = [
  {
      name_au: 'pety',
      date_com: '10.10.2020',
      text_com: 'asdasdasdasdasd',
      mark: 3,
      answer: 'asdasdasdasdwqerfszv'
  },
  {
      name_au: 'pety',
      date_com: '10.10.2020',
      text_com: 'asdasdasdasdasd',
      mark: 5,
      answer: 'asdasdasdasdwqerfszv'
  },
  {
      name_au: 'pety',
      date_com: '10.10.2020',
      text_com: 'asdasdasdasdasd',
      mark: 1,
      answer: 'asdasdasdasdwqerfszv'
  },
  {
      name_au: 'pety',
      date_com: '10.10.2020',
      text_com: 'asdasdasdasdasd',
      mark: 5,
      answer: 'asdasdasdasdwqerfszv'
  },
  {
      name_au: 'pety',
      date_com: '10.10.2020',
      text_com: 'asdasdasdasdasd',
      mark: 2,
      answer: ''
  },
  {
      name_au: 'pety',
      date_com: '10.10.2020',
      text_com: 'asdasdasdasdasd',
      mark: 4,
      answer: 'asdasdasdasdwqerfszv asdasdasdasdwqerfszv asdasdasdasdwqerfszv asdasdasdasdwqerfszv'
  },
  {
      name_au: 'pety',
      date_com: '10.10.2020',
      text_com: 'asdasdasdasdasd',
      mark: 5,
      answer: 'asdasdasdasdwqerfszv'
  },

]

*/


interface Object {
  date_com: string,
  name_au?: string,
  text_com?: string,
}


export default class Reviews extends React.Component<any, any>  {



  private sortByDate = (a: Object, b: Object): number => {
    let aTime: any = new Date(a.date_com),
        bTime: any = new Date(b.date_com);
    return bTime - aTime;
  }


  
  private rewriteDateForNormal = (dateIn: string): string => {
    let dateArr = dateIn.split("."),
        dateString = dateArr[1] + '.' + dateArr[0] + '.' + dateArr[2];
    return dateString;
  } 


// eslint-disable-next-line
  constructor(props: any){
    super(props)
    this.state = {
      isFetching: true,
      comments: [],
      mark: 0
    }
    this.getAllComments();
  }




  countMark = (): void => {
    let comments: [] = this.state.comments,
        count: number = 0, i: number =0;
  
    comments.forEach((element: any) => {
      count += +element.mark;
      i++;
    });

    this.setState({
      mark: (count/i).toFixed(1)
    })
  }



  returnStars = (value: number): string[] => {
    let stars: Array<string> = [];
    for (let i: number = 0; i < value; i++) {
      stars.push(
        '★'
      )
    }
    return stars
  }



  addData = (data: any): void => {
    this.setState({
      comments: data.sort(this.sortByDate),
      isFetching: true
    }, () => {
      this.countMark()
    })
  }



  getAllComments = async () => {
    fetch("/scripts/getcomments.php")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(responseJson => {
        this.addData(responseJson);
      })
      .catch(error => {
        console.log(error);
      })
  }



  //Времянка
  /*componentDidMount(){
    this.addData(CONTENT)
  }*/



  public render() {
    if ( this.state.isFetching ) {
      return (
        <section className="clearfix" style={{background:"rgb(30,30,40)", borderTop:"1px solid #333"}}>
          <div className="wrapper">
            <div className={styleReviews.reviews}>

              <div className={styleReviews.formsContainer}>
                <h1>Оставьте свое мнение о DEKA</h1>
                <div className={styleReviews.formCommentContainer}>
                  <ReviewsForm /*buttonHandler={this.getNewComment}*//>
                </div>
                <img src={shad} className={styleReviews.svgTry} alt="logo" />
              </div>

              <div className={styleReviews.commentsContainer}>
                <h1>Мнения клиентов о DEKA</h1>
                <div className={styleReviews.comark}>{this.state.mark}</div>
                <div className={styleReviews.whiteBacking}>
                  <div className={styleReviews.contain}>
                    {this.state.comments.map((item: any, index: number) => (
                      <div className={styleReviews.oneItem} key={index}>
                        <div className={styleReviews.content}>
                          <div className={styleReviews.mark} style={{color: "#FC0"}}>{this.returnStars(item.mark)}</div>
                          <div className={styleReviews.author}>{item.name_au}</div>
                          <div className={styleReviews.time}>{this.rewriteDateForNormal(item.date_com)}</div>
                          <div className={styleReviews.text}>{item.text_com}</div>
                        </div>
                        {item.answer && <div className={styleReviews.answer}>
                          <div className={styleReviews.author}>Администрация DEKA</div> 
                          {item.answer}
                        </div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )
    }else{
      return(
        <div>Грузилово</div>
      )
    };
  }
}