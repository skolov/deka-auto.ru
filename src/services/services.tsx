import React from 'react';
import styleService from './services.module.scss';



export default class Services extends React.Component<any, any>  {



  //private even = (n: number) => (n % 2)


  constructor(props: any){
    super(props)
    this.state = {
      isFetching: true,
      services: [],
      sales: []
    }
    this.getAllServices();
    //this.getAllSales();
  }
  
  
  
  getAllServices = async () => {

    const url: string = "/scripts/getservices.php";

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(responseJson => {
        this.redistribution(responseJson)
      })
      .catch(error => {
        console.log(error)
      })
      
  }




  redistribution = (array: any): void => {

    let sales: any = array.slice(0,3),
        services: any = array.slice(3);

    this.setState({
      sales: sales,
      services: services
    }, ()=> {
      console.log(this.state.sales)
      console.log(this.state.services)
      console.log(array)
    })
  }



 /* getAllSales = async () => {

    const url: string = "/scripts/getsales.php";

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(responseJson => {
        this.setState({
          sales: responseJson
        })
      })
      .catch(error => {
        console.log(error);
      })
      
  }*/




  public render() {
    return (
      <section className="clearfix" style={{backgroundColor: "rgb(30, 30, 40)"}}>
        <div className="wrapper">
          <div className={styleService.service} id="serv">

          <div className={styleService.mainThree}>
          {this.state.sales.map((item: any, index: number) => (
            <div className={styleService.oneItem} key={index} /*style={{ marginTop:  this.even(index) ? 30 : 0}}*/>
              <h1>{item.service}</h1>
              <div className={styleService.price}>{item.price} руб.</div>
            </div>
          ))}
          </div>

            <div className={styleService.moreElse}>
              {this.state.services.map((item: any, index: number) => (
                <div className={styleService.moreItem} key={index}>
                  <p>{item.service}</p>
                  <div className={styleService.price}>{item.price}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    );
  }
}

