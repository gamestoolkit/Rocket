import React from 'react'



function withLoading(WrappedComponent) {
  return function(props) {            
    return (
      <>
        {props.isLoading && <Spinner />} 
        <WrappedComponent { ...props } />
      </>
    )
  }
}

export default withLoading