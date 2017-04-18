import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddon, getAddons, removeAddon, saveAddonLocation } from '../actions/addons'

class CurrentAddons extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeId: null
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleActive = this.handleActive.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleDelete(id) {
    this.props.removeAddon(id)
  }

  handleMouseUp(id) {
    let coordinates = document.getElementById(id).getBoundingClientRect();
    this.props.saveAddonLocation(id, coordinates)
  }

  handleActive(id, event) {
    this.setState({
      activeId: id
    })
  }

  handleBlur(event) {

    this.setState({
      activeId: null
    })
    // event.stopPropagation()
  }

  renderAddons() {

    return this.props.usedAddons.map((image) => {
      let active = ''
      this.state.activeId === image.id ? active = 'active-addon' : null

      return (
        <Rnd
          key={image.id}
          ref={c => { this.rnd = c; }}
          initial={{x: image.x, y: image.y, width: image.w, height: image.h}}
          className='rnd'
          bounds={'parent'}
          zIndex={6000}>
            <span className="box"
              onMouseDown={this.handleActive.bind(null, image.id)}
              onMouseOut={this.handleMouseUp.bind(null, image.id)}>
              <div id={image.id} className={"img-mask " + active} ></div>
              <img className={'img-addon'} src={image.url} />
            </span>
            {this.state.activeId === image.id ?
              (<span className="delete"
                onClick={this.handleDelete.bind(null, image.id)}>
                [x]
              </span>)
              : null }
          </Rnd>
        )
      })
    }

  render() {
    return (
      <div className="workspace" onDoubleClick={this.handleBlur}>
        {this.renderAddons()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    usedAddons: state.Addon,
    allAddons: state.AddonLibrary
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addAddon: addAddon,
    getAddons: getAddons,
    removeAddon: removeAddon,
    saveAddonLocation: saveAddonLocation
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentAddons)
