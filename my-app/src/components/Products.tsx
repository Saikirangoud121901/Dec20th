//import React from 'react'

export default function Products() {
    const data=[
{ name: "Ramu", email: "ramu@gmail.com", company: "IBM", salary: 45000 },
    { name: "Raju", email: "raju@gmail.com", company: "HP", salary: 35000 },
    { name: "Ramya", email: "ramya@gmail.com", company: "InfoSys", salary: 25000 },
    { name: "John", email: "john@gmail.com", company: "Wipro", salary: 65000 },
    { name: "Abdul", email: "abdul@gmail.com", company: "TCS", salary: 55000 },
    ];
  return (
    <div>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Copany</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >Abhi</th>
      <td>abhi@gmail.com</td>
      <td>IBM</td>
      <td>45000</td>
    </tr>
    <tr>
      <th >Adithya</th>
      <td>adithya@gmail.com</td>
      <td>Infosys</td>
      <td>50000</td>
    </tr>
    <tr>
      <th >Saikiran</th>
      <td>saikiran@gmail.com</td>
      <td>HP</td>
      <td>40000</td>
    </tr>
    <tr>
      <th >puru</th>
      <td>purt@gmail.com</td>
      <td>TCS</td>
      <td>45000</td>
    </tr>
    </tbody>
  </table>
    </div>
  )
}
