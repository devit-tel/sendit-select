import React, { Component, PropTypes } from 'react'
import { UniqueId } from 'sendit-utility'

export default class SenditSelect extends Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
    this.state = {
      selectClass: '',
      uniqueId: null
    }
  }
  componentDidMount () {
    this.setState({uniqueId: UniqueId(6)})
  }
  onChange (e) {
    const { onChange } = this.props
    onChange(e)
  }
  render() {
    const { label, value, list, keyField, valueField, onFocus, onBlur, onChange, onKeyPress, disabled } = this.props
    const { values, selectClass, uniqueId } = this.state
    return (
      <div className={'SenditSelect' + selectClass}>
        <label htmlFor={uniqueId} className={'label'}>{label}</label>
        <select id={uniqueId} className={'select'} value={value} onFocus={onFocus} onBlur={onBlur} onChange={this.onChange} onKeyPress={onKeyPress} disabled={disabled}>
          {list.map((e, i)=>(<option key={i} value={e[valueField]}>{e[keyField]}</option>))}
        </select>
      </div>
    )
  }
}
SenditSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  list: PropTypes.array.isRequired,
  keyField: PropTypes.string,
  valueField: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}
SenditSelect.defaultProps = {
  keyField: 'key',
  valueField: 'value',
}