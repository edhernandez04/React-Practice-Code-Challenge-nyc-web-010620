import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        { props.renderSushi() }
        <MoreButton moreClick={props.moreClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer