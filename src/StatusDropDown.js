import React from 'react'
import Select from 'react-select'

const statuses = [ { value: 'Todo', label: 'Todo' },
  { value: 'In progress', label: 'In progress' },
  { value: 'Done', label: 'Done' }
  ];


const StatusDropDown = ({status})=>  {
  const statusValue = {
      value : status,
      label :status
  }
  return ( <div className="dropDownSelect"><Select defaultValue = {statusValue} value={statusValue} options={statuses} /></div>);
}
       


export default StatusDropDown;
    