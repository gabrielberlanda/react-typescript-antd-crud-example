import React, { useState, useEffect } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { NavRoute } from '../../AppRouter';

interface Props extends RouteComponentProps{
  navRoutes: NavRoute[],
}

const Navbar = withRouter((props: Props) => {

  const [selectedRoute, setSelectedRoute] = useState('');

  useEffect(() => {
    let activatedNav = props.navRoutes.find(n => n.path === props.location.pathname);
    if(activatedNav) setSelectedRoute(activatedNav.key);

  }, [props.location, props.navRoutes]);

  function menuClickHandler(ev: any) {
    setSelectedRoute(ev.key);
  }

  function renderNavLinks() {
    return (props.navRoutes || []).map((navRoute: NavRoute, index: number) => {
      return (
        <Menu.Item key={navRoute.key} onClick={menuClickHandler}>
          <Link to={navRoute.path}>
            <Icon type={navRoute.icon || 'question'}/> 
            <span>{navRoute.text}</span>
          </Link>
        </Menu.Item>
      )
    });

  }

  return(
    <Menu mode="horizontal" selectedKeys={ [selectedRoute] }>
      {renderNavLinks()}
    </Menu>
  )
})

export default Navbar;