import { h, Component } from 'preact';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render(props) {
    return (
      <div>
        {props.children}
      </div>
    );
  }
}
export default withRouter(ScrollToTop);
