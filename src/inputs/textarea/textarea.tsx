import React from 'react';
import styleTextarea from './textarea.module.scss'

export default class Textarea extends React.Component<any, any>  {
  public render() {
    return (
      <div className={styleTextarea.textarea}>
        <textarea 
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.data.value}
          onChange={this.props.updateStateProp}
          onKeyDown={this.props.getKeyDown}
        />
        {!this.props.data.error && 
          <div className={styleTextarea.error}>
            {this.props.data.errorText}
          </div>
        }
      </div>
    );
  }
}
  