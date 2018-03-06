import React from 'react';
import { Container, Menu, Icon, Dropdown, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>

            <Image fitted src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/>

            <Menu.Item position="right" name='Home' onClick={this.handleItemClick}/>

            <Dropdown item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>Getting Here/Parking</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item name="St. Patrick's Day" onClick={this.handleItemClick}/>

            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>Lunch Menu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item name="Bar" onClick={this.handleItemClick}/>

            <Menu.Item><Icon name = "search"/></Menu.Item>

          </Container>
        </Menu>
    );
  }
}
