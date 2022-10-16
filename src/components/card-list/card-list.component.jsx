import React from 'react';
import Card from "../card/card.component";
import '../card-list/card-list.styles.css';


const CardList = (props) => {

    const { monsters } = props;

 return(
    <div className='card-list'>
        {monsters.map((monster) => {
            return(
                 <Card monster={monster}/>
                ); 
                })}        
    </div>
        )
}

export default CardList;

// class CardList extends Component {
//     render() {
        

//         return (
//         <div className='card-list'>
//             {monsters.map((monster) => {

//                 return(
//                     <Card monster={monster}/>
//                 ); 
//                 })}        
//         </div>
//             )
//     }
// }

