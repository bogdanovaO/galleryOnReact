import React, { Component } from 'react'
import './Gallery.sass'
import Button from '@material-ui/core/Button';

const viewData = [
  { name: 'Большая плитка', id: 1 },
  { name: 'Средняя плитка', id: 2 },
  { name: 'Средний список', id: 3 }
];

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
      currentStyle: 'BIG'
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  handleClick(gridId, viewName) {
    this.props.gridId(gridId);
    this.setState({ currentStyle: viewName });
  }

  render() {
    return (
      <div className='dropdown'>
        <div className='dropdown__title' onClick={this.showMenu}>Выберите размер плитки</div>
        {
          this.state.showMenu 
          ? (
            <div className='dropdown__menu'>
            {
              viewData.map(view => {
                return <Button className='dropdown__button' key={view.id} onClick={() => this.handleClick(view.id, view.name)}>{view.name}</Button>;
              })
            }
            </div>)
          :
          (
            null
          )
        }
      </div>
    )
  }
}
