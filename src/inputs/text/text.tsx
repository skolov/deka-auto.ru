import React from 'react';
import styleInput from './text.module.scss'

class Text extends React.Component<any, any>  {
  public render() {
    return (
      <div className={styleInput.input}>
        <input 
          type="text" 
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.data.value}
          onChange={this.props.updateStateProp}
          onKeyDown={this.props.getKeyDown}
        />
        {!this.props.data.error && 
          <div className={styleInput.error}>
            {this.props.data.errorText}
          </div>
        }
      </div>
    );
  }
}

export default Text;
