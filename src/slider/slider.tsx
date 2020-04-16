import React from 'react';
import styleSlider from './slider.module.scss';
import content from './content';
import { Link } from 'react-router-dom';

type stateSlider = {
  currentSlide: number,
  countSliders:number,
  timerID: any
}

export default class Slider extends React.Component<any, stateSlider>  {

  constructor(props: any){
    super(props)
    this.goForward = this.goForward.bind(this);
    this.goBack = this.goBack.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
    this.state = {
      currentSlide: 0,
      countSliders: content.length-1,
      timerID: null
    }
  }

  goForward(): void{
    if(this.state.currentSlide < this.state.countSliders){
      this.setState(prevState => ({
        currentSlide: prevState.currentSlide + 1
      }))
    }else{
      this.setState({
        currentSlide: 0
      })
    }
  }

  goBack(): void{
    if(this.state.currentSlide === 0){
      this.setState({
        currentSlide: this.state.countSliders
      })
    }else{
      this.setState(prevState => ({
        currentSlide: prevState.currentSlide - 1
      }))
    }
  }

  changeSlide(forward: boolean){
    clearInterval(this.state.timerID);
    forward ? this.goForward() : this.goBack();
    this.setState({timerID: setInterval(this.goForward, 10000)})
  }

  clickRight(){
    this.changeSlide(true)
  }

  clickLeft(){
    this.changeSlide(false)
  }

  componentDidMount(){
    this.setState({timerID: setInterval(this.goForward, 10000)})
  }

  componentWillUnmount(){
    clearInterval(this.state.timerID);
    this.setState({timerID: null});
  }


  goToApp = (data: string):void => {
    setTimeout(() => {
      let element = document.getElementById(data);
      if(element){
        element.scrollIntoView(true);
      }
    },400)
  }

  public render() {
    return (
      <section className="clearfix">
        <div className="wrapper">
          <div className={styleSlider.sliderSection}>
            <div className={styleSlider.viewPort}>
              <span className={styleSlider.arrowBack} onClick={this.clickLeft}></span>
              <span className={styleSlider.arrowForward} onClick={this.clickRight}></span>

              {content.map((item, index) => (
                <div 
                  className={this.state.currentSlide === index ? styleSlider.oneSlide : styleSlider.oneSlide+' '+styleSlider.unvisible} 
                  key={index}
                  style={this.state.currentSlide === index ? {opacity: 1} : {opacity: 0}}
                >
                  <div className={styleSlider.backSlide}>
                    <div className={styleSlider.containerImage}>
                      <img src={item.background} alt=""/>
                      <div className={styleSlider.deka}>deka service</div>
                    </div>
                    <div className={styleSlider.containerText}>
                      <h1>{item.title}</h1>
                      <p>{item.text}</p>
                      <div className={styleSlider.blockReference}>
                        <div className={styleSlider.title}>{item.reference.title}</div>
                        <div className={styleSlider.text}>
                          {item.reference.text}
                        </div>
                        <Link to={item.reference.link} onClick={() => {this.goToApp(item.reference.id)}}><div className={styleSlider.button}>{item.reference.buttonText}</div></Link> 
                      </div>
                    </div>
                  </div>
                </div>  
              ))}

            </div> 
          </div>
        </div>
      </section>
    );
  }
}

  