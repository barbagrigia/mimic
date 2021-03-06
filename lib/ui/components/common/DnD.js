import React from 'react';
import { cssReset, getStyles } from 'ui/utils/css';

export class DnD extends React.Component {

  setStyles = (node) => {
    if (!node) {
      return;
    }

    const stylesString = getStyles(cssReset, this.props.style);

    node.setAttribute('style', stylesString);
  };

  render() {
    const { children, connect } = this.props;

    return connect(
      <div ref={ this.setStyles }>
        { children }
      </div>
    );
  }
}

DnD.propTypes = {
  children: React.PropTypes.node,
  style: React.PropTypes.object
};

export default DnD;
