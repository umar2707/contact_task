import React from 'react'

const MyInput = React.forwardRef((props,ref) => {
  return (
    <input ref={ref} required className='form-control input mb-1' {...props} />
  );
})

export default MyInput