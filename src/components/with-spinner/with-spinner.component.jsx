import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;

//this higher order component example
//is a very good example of closures.
//Higher order components, currying etc
//are all possible because of closures.
//closures makes it possible for inner functions
//to have access to the properties
//of their parents or outer functions
//The above is explained thus:
//WithSpinner is a HOC that receives
//another component - WrappedComponent
//as a parameter.
//now the inner component - Spinner
//has access to all the properties
//of its parent component
