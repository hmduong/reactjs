import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 'a',
    };
  }

  render() {
    return (
      <>
        <h1>Class Component!</h1>
        <div>button</div>
      </>
    );
  }
}

export default ClassComponent;
