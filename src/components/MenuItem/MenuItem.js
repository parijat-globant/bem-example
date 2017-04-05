import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    const { node, changeBgnd } = this.props;
    return (
      <a className={node.isSelected ? 'menu__item--selected menu__item' : 'menu__item'} onClick={() => changeBgnd(node.name)}>
        {node.name}
    </a>
    );
  }
}

export default MenuItem;
