function Food (){
    const f1 = "piza"
    const f2 = "burger"
    
    return(
        <ul>
            <li>momos</li>
            <li>{f1}</li>
            <li>{f2.toLocaleUpperCase()}</li>
        </ul>

    );    
}

export default Food