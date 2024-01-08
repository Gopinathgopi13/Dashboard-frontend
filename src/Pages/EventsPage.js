// import React from 'react'

// function EventsPage() {
//   return (
//     <div>EventsPage</div>
//   )
// }

// export default EventsPage
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EventsPage() {

  let [eventsData, seteventsData] = useState([]);

  useEffect(()=>{
    getDetails()
  },[])

  async function getDetails() {
    try {
      let {data} = await axios.get('http://localhost:3000/events')
      seteventsData(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(seteventsData)
  return (
    <>
      <table rules>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {eventsData.map(({id, eventName, date, status},index)=>{
            return(
              <tr>
                <td>{index}</td>
                <td>{eventName}</td>
                <td>{date}</td>
                <td>{status}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default EventsPage