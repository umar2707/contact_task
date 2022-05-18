import React from 'react'

const MySelect = ({options,defaultValue,value,onChange}) => {
  return (
    <select 
        className='btn btn-ligth text-left'
        value={value}
        onChange={event=>onChange(event.target.value)}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option)=>(
          <option className='text-left btn btn-light' value={option.value} key={option.value}>
              {option.name}
          </option>
      ))}
    </select>
  )
}

export default MySelect
