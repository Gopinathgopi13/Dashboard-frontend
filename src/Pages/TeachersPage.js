import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TeachersPage() {

  let [teacherData, setTeacherData] = useState([]);

  useEffect(()=>{
    getDetails()
  },[])

  async function getDetails() {
    try {
      let {data} = await axios.get('http://localhost:3000/teachers')
      // console.log(data)
      setTeacherData(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(teacherData)
  return (
    <>
      <table rules>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Performance</th>
            <th>Year of Joining</th>
          </tr>
        </thead>
        <tbody>
          {teacherData.map(({id, department, name, performance, yearOfJoining})=>{
            return(
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{department}</td>
                <td>{performance}</td>
                <td>{yearOfJoining}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default TeachersPage