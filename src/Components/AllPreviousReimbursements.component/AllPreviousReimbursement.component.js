import React from 'react';

export class AllPreviousReimbursementComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reimbursements: [],
      id: 0
    }
  }

  componentDidMount() {
    fetch('http://localhost:8088/Project1/users/id', {
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          reimbursements: data
        });
        console.log(this.state.reimbursements);
      })
  }

  render() {
    return (
      <div>
        <h1>Your Previous Reimbursements</h1>
        <table className='table-container'>
          <tbody>
            <tr>
              <th className='table-header'>reimb_id</th>
              <th className='table-header'>reimbursement amount</th>
              <th className='table-header'>date submitted</th>
              <th className='table-header'>date resolved</th>
              <th className='table-header'>description</th>
              <th className='table-header'>author</th>
              <th className='table-header'>resolver</th>
              <th className='table-header'>status</th>
              <th className='table-header'>type</th>
            </tr>
            <tr>
              
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}