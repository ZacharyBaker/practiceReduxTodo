import React from 'react'
const filters = ['ALL', 'COMPLETE', 'INCOMPLETE']
import './Footer.scss'


const Footer = props => {
	console.log(props)
	return (
		<div className="footer">
			SHOW:
			{filters.map(filter=>{
				return (
					<span
						className="filter"
						key={filters.indexOf(filter)}
						onClick={()=>props.setVisibilityFilter(filter)}
					>
						{filter}
					</span>
				)
			})}
		</div>
	)
}

export default Footer