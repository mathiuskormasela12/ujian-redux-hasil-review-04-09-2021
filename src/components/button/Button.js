// ===== Button
import React, {Fragment} from 'react';

import styled from './style.module.scss';

export function Button(props) {
  return (
		<Fragment>
			<button 
				type={props.type} 
				className={styled.btn} 
				onClick={props.onClick}
				>
				{props.children}
			</button>
		</Fragment>
	);
}