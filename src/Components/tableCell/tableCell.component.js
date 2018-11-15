import React, { Component } from 'react';

class TaaCell extends Component {
  render() {
    return (
      <tr className="TaaRow">
        <td className='TaaCell'>{this.props.reimb_id}</td>
        <td className="TaaCell">{this.props.re_amount}</td>
        <td className="TaaCell">{this.props.re_submitted}</td> 
        <td className="TaaCell">{this.props.re_resolved}</td>
        <td className="TaaCell">{this.props.re_description}</td>
        <td className="TaaCell">{this.props.re_author}</td>
        <td className="TaaCell">{this.props.re_resolver}</td>
        <td className="TaaCell">{this.props.re_status}</td>
        <td className="TaaCell">{this.props.re_type}</td>
      </tr>
    );
  }
}

export default TaaCell;