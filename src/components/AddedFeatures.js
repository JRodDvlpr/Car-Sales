  
import React from 'react';
// import {connect} from 'react-redux';
import {useSelector} from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  
  const car = useSelector(state => state.car.features);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.length ? (
        <ol type="1">
          {car.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};


export default AddedFeatures;
