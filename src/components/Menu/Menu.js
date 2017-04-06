
//const React = require('react');
//const { Component } = require('react');
//const { connect } = require('react-redux');
//const MenuItem = require('../MenuItem/MenuItem');
//require ('./Menu.css');
//const makeMenuAction = require('../../actions/menu');
import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as MenuStoreAction from '../../actions/menu'


class Menu extends Component {
  render() {
    const { menuItems, actions } = this.props;
    return (
      <section className="menu">
        <h3 className="menu__title"> Page Sections </h3>
          <nav className="menu__items">
            {menuItems.map((tabNode, i) => <MenuItem key={i} node={tabNode} changeBgnd={actions.makeMenuItems}/>)}
          </nav>
      </section>
    );
  }
}

function mapStateToProps(state){
   return {
      menuItems : state.menuItems
   }
}

function mapDispatchToProps(dispatch){
   return {
      actions : bindActionCreators(MenuStoreAction, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
//module.exports.constructor = Menu;
// module.exports.Menu = connect(
//     state => ({
//         menuItems : state.menuItems
//     }),
//     {
//         actions: makeMenuAction.makeMenuItems
//     }
// )(Menu);