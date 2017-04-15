import React, { Component as C } from 'react';

export default (loader, collection) => (
  class AsyncComponent extends C {
    constructor(props) {
      super(props);

      this.Component = null;
      this.state = { Component: AsyncComponent.Component };
    }

    componentWillMount() {
      if (!this.state.Component) {
        loader().then((Component) => {
          AsyncComponent.Component = Component;

          this.setState({ Component });
        });
      }
    }

    render() {
      if (this.state.Component) {
        return <this.state.Component {...this.props} {...collection} />;
      }

      return null;
    }
  }
);
