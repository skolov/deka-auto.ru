import React from 'react';
import styleMark from './mark.module.scss';

export default class Mark extends React.Component<any, any>  {


  refEl: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  state = {
    selected: false,
    selectedMark: 0
  }


  createStarsLine = (): JSX.Element[] => {
    let stars: JSX.Element[] = [];
    for (let i: number = 1; i < 6; i++) {
      stars.push(
        <div
          style={{color: i <= this.props.value ? "#FC0" : "#000"}}
          key={i}
          onMouseOver={() => {this.selectStar(i, true)}}
          onMouseOut={() => {this.selectStar(0);}}
          onClick={() => {this.clickHandler(i)}}
        >★</div>
      )
    }
    return stars;
  }




  clickHandler = (item: number): void => {
    this.setState({
      selected: true, 
      selectedMark: item
    }, () => {
      this.props.updateStateProp(this.state.selectedMark);
    })
  }


  selectStar = (item: number, hoverMode: boolean = false): void => {
    if(this.state.selected && !hoverMode) item = this.state.selectedMark - 1;
      else item--;
    if(this.refEl.current){
      Array.from(this.refEl.current.querySelectorAll("div")).forEach(
        (elements: HTMLDivElement, amountStars: number = 5) => {
          elements.style.color = amountStars-- > item ? "#000" : "#FC0";
        }
      )
    }
  }



  public render() {
    return (
      <div 
        ref={this.refEl} 
        className={styleMark.markLine}
        onMouseDown={this.props.getKeyDown}
      >
        {this.createStarsLine()}
      </div>
    );
  }

}