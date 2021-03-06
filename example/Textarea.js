import React from 'react';
import {DelayInput} from '../src';


export class Textarea extends React.Component {
  state = {
    value: '',
    minLength: 0,
    delayTimeout: 500,
    infinite: false,
    forceNotifyByEnter: false,
    forceNotifyOnBlur: true
  };

  render() {
    const {
      minLength, infinite, delayTimeout,
      forceNotifyByEnter, forceNotifyOnBlur,
      value, key
    } = this.state;

    return (
      <div>
        <div className="config">
          <label className="label">
            Min length:
            <input
              className="input"
              type="range"
              value={minLength}
              step={1}
              min={0}
              max={10}
              onChange={e => this.setState({minLength: parseInt(e.target.value, 10)})} />
            {minLength}
          </label>

          <label className="label">
            Delay timeout:
            <input
              className="input"
              type="range"
              disabled={infinite}
              value={delayTimeout}
              step={100}
              min={0}
              max={2000}
              onChange={e => this.setState({delayTimeout: parseInt(e.target.value, 10)})} />
            {delayTimeout}
          </label>

          <label className="label">
            Infinite timeout:
            <input
              className="input"
              type="checkbox"
              checked={infinite}
              onChange={e => this.setState({infinite: e.target.checked})} />
          </label>
        </div>

        <div className="config">
          <label className="label">
            Notify by:
          </label>

          <label className="label">
            Enter keypress:
            <input
              className="input"
              type="checkbox"
              checked={forceNotifyByEnter}
              onChange={e => this.setState({forceNotifyByEnter: e.target.checked})} />
          </label>

          <label className="label">
            Blur:
            <input
              className="input"
              type="checkbox"
              checked={forceNotifyOnBlur}
              onChange={e => this.setState({forceNotifyOnBlur: e.target.checked})} />
          </label>
        </div>

        <DelayInput
          cols="60"
          rows="7"
          element="textarea"
          forceNotifyByEnter={forceNotifyByEnter}
          forceNotifyOnBlur={forceNotifyOnBlur}
          minLength={minLength}
          delayTimeout={infinite ? -1 : delayTimeout}
          onChange={e => this.setState({value: e.target.value})}
          onKeyDown={e => this.setState({key: e.key})} />
        <p>Value: {value}</p>
        <p>Key pressed: {key}</p>
      </div>
    );
  }
}
