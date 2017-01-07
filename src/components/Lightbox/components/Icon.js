import React, { PropTypes } from 'react';
import icons from '../icons';

function Icon ({ fill, type, ...props }) {
	const icon = icons[type];

	return (
		<span
			dangerouslySetInnerHTML={{ __html: icons["close"] }}
			{...props}
		/>
	);
};

Icon.propTypes = {
	fill: PropTypes.string,
	type: PropTypes.oneOf(Object.keys(icons)),
};
Icon.defaultProps = {
	fill: 'white',
};

export default Icon;
