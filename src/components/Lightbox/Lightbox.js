import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import ScrollLock from 'react-scrolllock';

import theme from './theme';
import Container from './components/Container';
import Header from './components/Header';
import Portal from './components/Portal';

import { bindFunctions, canUseDom } from './utils';

class Lightbox extends Component {
	constructor () {
		super();

		bindFunctions.call(this, [
			'handleKeyboardInput',
		]);
	}
	getChildContext () {
		return {
			theme: this.props.theme,
		};
	}
	componentDidMount () {
		if (this.props.isOpen && this.props.enableKeyboardInput) {
			window.addEventListener('keydown', this.handleKeyboardInput);
		}
	}

	componentWillUnmount () {
		if (this.props.enableKeyboardInput) {
			window.removeEventListener('keydown', this.handleKeyboardInput);
		}
	}

	// ==============================
	// METHODS
	// ==============================

	gotoNext (event) {
		if (this.props.currentImage === (this.props.images.length - 1)) return;
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}
		this.props.onClickNext();

	}
	gotoPrev (event) {
		if (this.props.currentImage === 0) return;
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}
		this.props.onClickPrev();

	}
	handleKeyboardInput (event) {
		if (event.keyCode === 37) { // left
			this.gotoPrev(event);
			return true;
		} else if (event.keyCode === 39) { // right
			this.gotoNext(event);
			return true;
		} else if (event.keyCode === 27) { // esc
			this.props.onClose();
			return true;
		}
		return false;

	}

	// ==============================
	// RENDERERS
	// ==============================

	renderDialog () {
		const {
			backdropClosesModal,
			customControls,
			isOpen,
			onClose,
			showCloseButton,
			width,
		} = this.props;

		if (!isOpen) return <span key="closed" />;

		return (
			<Container
				key="open"
				onClick={!!backdropClosesModal && onClose}
				onTouchEnd={!!backdropClosesModal && onClose}
			>
				<div className={css(classes.content)} style={{ maxWidth: width }}>
					<Header
						customControls={customControls}
						onClose={onClose}
						showCloseButton={showCloseButton}
					/>
					{this.renderImages()}
				</div>
				<ScrollLock />
			</Container>
		);
	}
	renderImages () {
		const {
			currentImage,
			images,
			imageCountSeparator,
			onClickImage,
			showImageCount,
		} = this.props;

		if (!images || !images.length) return null;

		const image = images[currentImage];

		const heightOffset = `${theme.header.height + theme.footer.height + (theme.container.gutter.vertical)}px`;

		return (
			<figure className={css(classes.figure)}>
				{/*
					Re-implement when react warning "unknown props"
					https://fb.me/react-unknown-prop is resolved
					<Swipeable onSwipedLeft={this.gotoNext} onSwipedRight={this.gotoPrev} />
				*/}
				<iframe
						style={{
							maxHeight: `calc(100vh - ${heightOffset})`,
						}}
						src={image.src}
						frameBorder="0"
						allowFullScreen={true}>
				</iframe>
			</figure>
		);
	}

	render () {
		return (
			<Portal>
				{this.renderDialog()}
			</Portal>
		);
	}
}

Lightbox.propTypes = {
	backdropClosesModal: PropTypes.bool,
	currentImage: PropTypes.number,
	customControls: PropTypes.arrayOf(PropTypes.node),
	enableKeyboardInput: PropTypes.bool,
	images: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			thumb: PropTypes.string.isRequired
		})
	).isRequired,
	isOpen: PropTypes.bool,
	onClickImage: PropTypes.func,
	onClose: PropTypes.func.isRequired,
	showCloseButton: PropTypes.bool,
	theme: PropTypes.object,
	width: PropTypes.number,
};
Lightbox.defaultProps = {
	currentImage: 0,
	enableKeyboardInput: true,
	imageCountSeparator: ' of ',
	onClickShowNextImage: true,
	showCloseButton: true,
	theme: {},
	width: 1024,
};
Lightbox.childContextTypes = {
	theme: PropTypes.object.isRequired,
};

const classes = StyleSheet.create({
	content: {
		position: 'relative',
	},
	figure: {
		margin: 0, // remove browser default
	},
	image: {
		display: 'block', // removes browser default gutter
		height: 'auto',
		margin: '0 auto', // maintain center on very short screens OR very narrow image
		maxWidth: '100%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none',
	},
});

export default Lightbox;
