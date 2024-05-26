import React, { Fragment } from 'react';

const clothingLayout = ({ children }) => {
  return (
    <Fragment>
      <div>{children}</div>
      <div className="max-w-xl fixed bottom-0 left-10">
        <div>
          <code className="liquidfire">Liquidfire</code>
          <code className="script mx-2">
            Liquidfire Dragon Collection copyright all rights reserved.
          </code>
        </div>
      </div>
    </Fragment>
  );
};

export default clothingLayout;
