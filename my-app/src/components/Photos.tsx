//import React from 'react'

export default function Photos() {
  const sevenwonders = [
    {no:"1", name: "Great Wall of China", Location: "Beijing", contry: "China", Image:"https://media.geeksforgeeks.org/wp-content/uploads/20230124174911/The-Great-Wall-of-China.jpg"},
    {no:"2", name: "Chichén Itzá", Location: " Yucatán Peninsula ", contry: "Mexico", Image:"https://media.geeksforgeeks.org/wp-content/uploads/20230124174916/Chichen-Itza-Mexico.jpg"},
    {no:"3", name: "Petra", Location: "The Khaznah (“Treasury”) ", contry: "Petra", Image:"https://media.geeksforgeeks.org/wp-content/uploads/20230124174912/Petra-Jordan.jpg"},
    {no:"4", name: "Machu Picchu", Location: "Machu Picchu", contry: "Peru", Image:"https://media.geeksforgeeks.org/wp-content/uploads/20230124174913/Machu-Picchu-Peru.jpg"},
    {no:"5", name: "Christ the Redeemer", Location: "Rio de Janeiro", contry: "Brazil", Image:"https://media.geeksforgeeks.org/wp-content/uploads/20230124174915/Christ-the-Redeemer-Brazil-(1).jpg"},
    {no:"6", name: "Colosseum", Location: "Rome", contry: "Italy", Image:"https://media.geeksforgeeks.org/wp-content/uploads/20230124174835/Colosseum-Rome-(1).jpg"},
    {no:"7", name: "Taj Mahal", Location: "Agra", contry: "India", Image:"https://media.geeksforgeeks.org/wp-content/uploads/20230124174911/Taj-Mahal-India.jpg"},
   

  ];

  // () => ()

  return (
    <div>
      <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
          <th scope="col">no</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">contry</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {sevenwonders.map(
              (x)=>( 
              <tr>
                 <td>{x.no}</td>
                  <td>{x.name}</td>
                  <td>{x.Location}</td>
                  <td>{x.contry}</td>
                  <td><img src={x.Image}/></td>
                 
                </tr>
               )
          )}
         
        </tbody>
      </table>
    </div>
  );
}