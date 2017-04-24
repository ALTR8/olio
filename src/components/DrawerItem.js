// std library imports
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// app imports
import { addAddon } from '../actions/addons'

class DrawerItem extends React.Component {

  constructor() {
    super()
    this.handleImg = this.handleImg.bind(this)
    this.handleText = this.handleText.bind(this)
  }

  handleImg() {
    this.props.addAddon(this.props.item)
  }

  handleText() {
    this.props.addAddon({...this.props.item, category: 'text'})
  }

  renderImg() {
    return (
      <img onClick={this.handleImg}
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
    return (
      <div>
        <p
          className="text-template"
          onClick={this.handleText}
          style={{fontFamily: this.extractFontName(this.props.item.url)}}
        >
          {this.extractFontName(this.props.item.url)}
        </p>
        <link href={this.props.item.url} rel="stylesheet"/>
      </div>
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
