// std library imports
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// node_modules imports
import Modal from 'react-modal';
import { OrderedSet } from 'immutable';
import { NotificationStack } from 'react-notification';


// app imports
import { addAddon, deleteAllAddons } from '../actions/addons'
import { saveCreation, restoreCreation } from '../actions/creations'
import { logout } from '../actions/accounts'
import Photo from './Photo'
import Tooltip from './Tooltip'
import Signup from './Signup'
import Login from './Login'

class NavBar extends Component {
	constructor(props){
		super(props)
		this.state = {
			notifications: OrderedSet(),
			count: 0,
			webcamActive: false,
			signupModalOpen: false,
			loginModalOpen: false
		};
		this.toggleWebcam = this.toggleWebcam.bind(this)
		this.handleSave = this.handleSave.bind(this)
		this.toggleSignupModal = this.toggleSignupModal.bind(this)
		this.toggleLoginModal = this.toggleLoginModal.bind(this)
		this.handleLogout = this.handleLogout.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.handleText = this.handleText.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.addNotification = this.addNotification.bind(this)
		this.removeNotification = this.removeNotification.bind(this)
	}

	addNotification(message) {
		const { notifications, count } = this.state;
		const id = notifications.size + 1;
		const newCount = count + 1;
		return this.setState({
			count: newCount,
			notifications: notifications.add({
				message: message,
				key: newCount,
				action: 'Dismiss',
				dismissAfter: 3400,
				onClick: () => this.removeNotification(newCount),
			})
		});
	}

	removeNotification (count) {
		const { notifications } = this.state;
		this.setState({
			notifications: notifications.filter(n => n.key !== count)
		})
	}


	renderSaveButton() {
		return this.props.token ? <button className="btn" onClick={this.handleSave}>Save Creation</button> : null
	}

	renderRestore() {
		return this.props.token ? <button className="btn" onClick={this.props.handleSidebar}>Restore</button> : null
	}

	renderLogout() {
		return this.props.token ? <button className="btn" onClick={this.handleLogout}>Log Out</button> : null
	}

	renderSignup() {
		return !this.props.token ? <button className="btn" onClick={this.toggleSignupModal}>Sign Up</button> : null
	}

	renderLogin() {
		return !this.props.token ? <button className="btn" onClick={this.toggleLoginModal}>Login</button> : null
	}

	handleSave() {
		this.props.saveCreation(this.props.usedAddons, this.props.token)
		this.addNotification('Creation Saved!')
	}


	closeModal() {
		this.setState({
			signupModalOpen: false,
			loginModalOpen: false
		})
	}

	toggleWebcam(){
		this.setState({
			webcamActive: !this.state.webcamActive,
			signupModalOpen: false
		})
	}

	toggleSignupModal(){
		if (this.state.loginModalOpen) {
			this.setState({
				loginModalOpen: false
			})
		}
		this.setState({
			signupModalOpen: !this.state.signupModalOpen
		})
	}

	toggleLoginModal(){
		if (this.state.signupModalOpen) {
			this.setState({
				signupModalOpen: false
			})
		}
		this.setState({
			loginModalOpen: !this.state.loginModalOpen
		})
	}

	handleLogout() {
		this.props.logout()
		this.props.deleteAllAddons()
	}

	handleText() {
		this.props.addAddon({
			initial_height: 100,
			initial_width: 200,
			url: "https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff",
			category: 'text'
		})
	}

	handleKeyDown(e) {
		if (e.ctrlKey && e.which === 87) {
			this.toggleWebcam()
		} else if (e.ctrlKey && e.which === 84) {
			this.handleText()
		} else if (e.ctrlKey & e.which === 83) {
			this.handleSave()

		}
	}

	componentWillMount(){
		document.addEventListener("keydown", this.handleKeyDown.bind(this));
	}

	renderSignupModal() {

		let customStyles = {
			content : {
				top                   : '50%',
				left                  : '50%',
				right                 : 'auto',
				bottom                : 'auto',
				marginRight           : '-50%',
				transform             : 'translate(-50%, -50%)',
				backgroundColor       : 'whitesmoke'
			},
			overlay : {
				zIndex	 			  : '10000'
			}
		}
		if (!this.props.token)
		return (
			<Modal
				isOpen={this.state.signupModalOpen}
				contentLabel="Sign Up"
				style={customStyles}
				>
					<Signup closeModal={this.closeModal} />
					<button className="closeModal" onClick={this.closeModal}>close</button>
				</Modal>
			)
		}

		renderLoginModal() {

			let customStyles = {
				content : {
					top                   : '50%',
					left                  : '50%',
					right                 : 'auto',
					bottom                : 'auto',
					marginRight           : '-50%',
					transform             : 'translate(-50%, -50%)',
					backgroundColor       : 'whitesmoke'
				},
				overlay : {
					zIndex	 			  : '10000'
				}
			}
			if (!this.props.token)
			return (
				<Modal
					isOpen={this.state.loginModalOpen}
					contentLabel="Sign Up"
					style={customStyles}>
					<Login closeModal={this.closeModal} />
					<button className="closeModal" onClick={this.closeModal}>close</button>
				</Modal>
			)
		}

		render(){
			return(
				<div>
					<div className="btn-bar">
						<NotificationStack
							notifications={this.state.notifications.toArray()}
							onDismiss={notification => this.setState({
								notifications: this.state.notifications.delete(notification)
							})}
						/>
						<Tooltip />
						<p className="toolTipInfoText">⬅ hover over the keyboard</p>
						{this.renderSaveButton()}
						<button className="btn" onClick={this.toggleWebcam}>WEBCAM {this.state.webcamActive ? 'OFF' : 'ON' }</button>
						<button className="btn" onClick={this.handleText}>Add Text</button>
						{this.renderSignup()}
						{this.renderLogin()}
						{this.renderRestore()}
						{this.renderLogout()}
						{this.state.webcamActive ? <Photo handleToggle={this.toggleWebcam} /> : null}
					</div>
					{this.renderSignupModal()}
					{this.renderLoginModal()}
				</div>
			)
		}
	}
	const mapStateToProps = (state) => {
		return {
			token: state.Accounts.token,
			usedAddons: state.Addon
		}
	}


	const mapDispatchToProps = (dispatch) => {
		return bindActionCreators({
			deleteAllAddons: deleteAllAddons,
			logout: logout,
			saveCreation: saveCreation,
			addAddon: addAddon,
			restoreCreation: restoreCreation
		}, dispatch);
	}


	export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
