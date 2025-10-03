import React from 'react'

function List (){
const frute = [ {name: "apple", caloris: 95 }, 
                {"orange"}, 
                {"banana"}, 
                {"graps"}, 
                {"mango"}]
 const listitem =  frute.map(frute => <li>{frute}</li>)
 return(<ul>{listitem}</ul>);
}

export default List