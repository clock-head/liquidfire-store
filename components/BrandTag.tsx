import React, { Fragment } from 'react';

const BrandTag: React.FC = () => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-body md:w-120 fixed bottom-0 right-0">
          <div className="grid grid-cols-2 justify-items-center">
            <h1 className="liquidfire">Liquidfire</h1>
            <p className="script relative top-2.5 right-6">
              liquidfire copyright all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BrandTag;
