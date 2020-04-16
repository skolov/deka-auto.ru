import React from 'react';
import styleSelect from './select.module.scss';

export default class Select extends React.Component<any, any>  {
  public render() {
    return (
      <div className={styleSelect.select}>
        <select 
          required
          name={this.props.name} 
          value={this.props.data.value} 
          onChange={this.props.updateStateProp}
        >
          {this.props.options.map((item: any, index: number) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
        {!this.props.data.error &&
          <div className={styleSelect.error}>
            {this.props.data.errorText}
          </div>
        }
      </div>
    );
  }
}
  