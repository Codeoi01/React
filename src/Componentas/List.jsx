import React from 'react'
import PropTypes from 'prop-types';
import './list.css'

function List (props) {

    const Category = props.Category;     
    const itemlist = props.items;
        
       // Sorting

        //frute.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ASCENDING
        //frute.sort((a, b) => b.name.localeCompare(a.name)); // ALPHABETICAL DESCENDING
        //frute.sort((a, b) => a.caloris - b.caloris) // NUMERICAL ASCENDING
        // frute.sort((a, b) => b.caloris - a.caloris) //  NUMERICAL DESCENDING 
        
        // Filtering

        // const lowCalfrute =  frute.filter(frute => frute.caloris < 100)     
        // const highCalfrute =  frute.filter(frute => frute.caloris >= 100)     
        
 
 
 
 
 const listitem =  itemlist.map(items =><li key={items.id}>
                                            {items.name}: &nbsp;
                                            <b>{items.caloris}</b></li>)
 return(

       <>
       
        <ol className='list-items'>
           {listitem.length > 0 ? <h2 className='list-category'>{Category}</h2> :null } 
            {listitem}</ol>
    </>

);
}
List.propTypes = {
    Category: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,   
                                              caloris: PropTypes.number})).isRequired 
}
export default List
