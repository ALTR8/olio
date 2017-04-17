import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddon, getAddons } from '../actions/addons'

const style = {
  textAlign: 'center',
  padding: '40px',
  border: 'solid 3px #fff',
  borderRadius: '5px',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};


class CurrentAddons extends React.Component {

  constructor(props) {
    super(props)
  }

  renderAddons() {
    return this.props.usedAddons.map((image) => {
      return (
        <Rnd
          ref={c => { this.rnd = c; }}
          initial={{
            x: window.innerWidth / 2 - 200,
            y: window.innerHeight / 2 - 80,
            width: image.w,
            height: image.h,
          }}
          style={style}
          bounds={'parent'}
          zIndex={this.props.zIndex}
          >
            <span className="box" id={'img-' + image.id}>
              <img className='img' src={image.url} />
            </span>
          </Rnd>
        )
      })
    }

    render() {
      return (
        <div style={{height: '1000px'}}>
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
      getAddons: getAddons
    }, dispatch);
  };



  export default connect(mapStateToProps, mapDispatchToProps)(CurrentAddons)
