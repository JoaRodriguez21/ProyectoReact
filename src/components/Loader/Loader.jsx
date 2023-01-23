import React from 'react'
import { RaceBy } from '@uiball/loaders'

function Loader(props) {
  return <RaceBy 
   size={200}
   lineWeight={5}
   speed={3} 
   color="black"
   {...props} 
  />
}

export default Loader;