import React from 'react'
import './BookingParty.css'

function BookingParty() {
  return (
    <>
      <div className='heading'>
        <p className='title'>Booking Party Information</p>
        <span>(Enter as much as possible)</span>
      </div>
      <div className='askInfo'>Use Information on account? <button className='yesNoBtn'>{'Yes'}</button></div>
      <form>
        <div>
          <label>Firm Name</label>
          <input type='text' placeholder='Input'></input>
          <label>Booking Contact Name</label>
          <input type='text' placeholder='Type here'></input>
          <label>Phone Number(No Spaces)</label>
          <input type='text' placeholder='Type here'></input>
        </div>

        <div>
          <label>Billing Address</label>
          <input type='text' placeholder='Type here'></input>
          <label>ZIP/Postal Code</label>
          <input type='text' placeholder='Input'></input>
          <label>Country/City</label>
          <input type='text' placeholder='Canada'></input>
        </div>
        
        <div>
          <label>Role</label>
          <input type='text' placeholder='Input'></input>
          <label>Name of Represented Client</label>
          <input type='text'></input>
        </div>
        
        <div>
          <label>Lead Counsel(s) Information</label>
          <input type='text' placeholder='Name'></input>
          <input type='text' placeholder='Email'></input>
        </div>
      </form>
    </>
  )
}

export default BookingParty