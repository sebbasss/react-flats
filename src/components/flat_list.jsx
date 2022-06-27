import React from 'react';
import Flat from './flat';

const FlatList = (props) => {

  const renderList = () => {
    return props.flats.map((flat, index) => {
      return <Flat flat={flat} index={index} selectFlat={props.selectFlat} />;
    });
  }
  return (
    <div className='flat-list'>
    {renderList()}
    </div>
  )
}

export default FlatList
