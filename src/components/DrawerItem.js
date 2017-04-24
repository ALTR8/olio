// std library imports
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// app imports
import { addAddon } from '../actions/addons'

class DrawerItem extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addAddon(this.props.item)
  }

  renderImg() {
    return (
      <img onClick={this.handleClick}
        data-id={this.props.item.id}
        src={this.props.item.url}
        alt=''
      />
    )
  }

  extractFontName(url) {
    let raw = url.split('=').pop()
    let fontFamily = raw.trim().replace('+', ' ')
    return fontFamily
  }

  renderText() {
    // debugger
    return (
      <p className="text-template">{this.extractFontName(this.props.item.url)}</p>
    )
  }

  render() {
    return (
      <div className="drawer-item">
        {this.props.type === 'text'? this.renderText() : this.renderImg()}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addAddon: addAddon,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(DrawerItem)
