import axios from 'axios'
import React, { useEffect, useState } from 'react'

function StudentPage() {

  let [milestoneData, setmilestoneData] = useState([]);

  useEffect(()=>{
    getDetails()
  },[])

  async function getDetails() {
    try {
      let {data} = await axios.get('http://localhost:3000/milestone')
      setmilestoneData(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(milestoneData)
  return (
    <>
      <table rules>
        <thead>
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Award Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {milestoneData.map(({id, year, award, description},index)=>{
            return(
              <tr>
                <td>{index}</td>
                <td>{year}</td>
                <td>{award}</td>
                <td>{description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default StudentPage