import React, { Component } from 'react';
import './Menu.css';
import MenuItem from '../MenuItem/MenuItem';
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
   console.log(state);
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
