import React from 'react'
import './CharacterListItem.css'

//React component can receive one argument: props
//You can pass data to the react component by using props.
//Props is an object that groups data that is passed to a component.
export const CharacterListItem = ({character, isChampion}) => {
    const {name, health, fraction, weapon, damagePerHit} = character;
    return (
        //When you use repeating elements in JSX, you should use key attribute
        //It's required for React to be able to update the element
        <li key={name}>
          <span className="character-name">{isChampion ? `Champion ${name}` : name}</span>
          <span>{health}</span>
          <span>{fraction}</span>
          <span>{weapon}</span>
          <span>{damagePerHit}</span>
        </li>
      );
}
