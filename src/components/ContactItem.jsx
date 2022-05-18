import React from 'react'
const ContactItem = ({ name, numbers, adress, emails, id, edit, remove }) => {
  return (
    <div className="card m-1 p-2 col-lg-3 col-md-4 col-sm-12 col-xl-3 col-12">
      <div className="card-head position-relative">
        <div className="card-title pt-2 text-dark "><h3>{name}</h3></div>
        <div className="position-absolute delete cursor-pointer">
          <button onClick={() => remove(id)} className='btn btn-outline-danger'><i className="fa fa-trash"></i></button>
          <button onClick={() => edit(id)} className=' ml-1 btn btn-outline-primary'><i className="fa-solid fa-user-pen"></i></button>
        </div>
      </div>
      <div className="card-body">
        <h6 className='text-dark'><i className="fa-solid fa-square-phone"></i> Numbers: {numbers?.length >= 2 ?
          (numbers?.map((n, i) => (<div key={n} className='pl-1'>{i + 1}){n}</div>)))
          : (<div>{numbers}</div>)
        }</h6>
        <h6 className='text-dark adress'><i className="fa-solid fa-location-dot"></i> Adress: {adress?.length >= 2 ?
          (adress?.map((n, a) => (<div key={n} className='pl-1'>{a + 1}){n}</div>)))
          : (<div>{adress}</div>)
        }</h6>
        <h6 className='text-dark emails'><i className="fa-solid fa-envelope"></i> Email: {emails?.length >= 2 
          ? (emails?.map((n, b) => (<div key={n} className='pl-1'>{b + 1}){n}</div>)))
          : (<div>{emails}</div>)
        }</h6>
      </div>
    </div>
  )
}

export default ContactItem
