import React from 'react'

function List (){
const frute = [ {id: 1, name: "apple",  caloris: 95 }, 
                {id: 2, name: "orange", caloris: 45}, 
                {id: 3, name: "banana", caloris: 105}, 
                {id: 4, name: "coconut",caloris: 159 },] 
 
// frute.sort((a,b) => a.caloris - b.caloris)

 const listitem =  frute.map(frute => <li key={frute.id}>
                                          {frute.name}: &nbsp;
                                          <b>{frute.caloris}</b></li>)
 return(<ul>{listitem}</ul>);
}

export default List
