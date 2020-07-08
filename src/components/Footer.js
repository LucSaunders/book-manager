import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
	[SHOW_ALL]: 'All',
	[SHOW_ACTIVE]: 'Active',
	[SHOW_COMPLETED]: 'Completed',
}

// Refactor would be class Footer extends Component ... constructor ...render
const Footer = (props) => {
	const { activeCount } = props
	const itemWord = activeCount === 1 ? 'book' : 'books'
	// Add state
	// goalBooks is state, updateGoalBooks is func
	const [goalBooks, updateGoalBooks] = useState(0)
	return (
		<footer className='footer'>
			<span className='todo-count'>
				<strong>{activeCount || 'No'}</strong> {itemWord} left to read out of{' '}
				{goalBooks} books.
			</span>
			{/* <button
				onClick={() => this.setState({ showAuthors: !this.state.showAuthors })}
				style={{ textSize: '14px', margin: '5px', color: 'blue' }}
			> */}
			<button
				onClick={() => updateGoalBooks(goalBooks + 1)}
				style={{ textSize: '14px', margin: '5px', color: 'blue' }}
			>
				{' '}
				Increment{' '}
			</button>{' '}
			{/* <button
				onClick={() => this.setState({ showAuthors: !this.state.showAuthors })}
				style={{ textSize: '14px', margin: '5px', color: 'blue' }}
			> */}
			<button
				onClick={() => updateGoalBooks(goalBooks - 1)}
				style={{ textSize: '14px', margin: '5px', color: 'blue' }}
			>
				{' '}
				Decrement{' '}
			</button>
		</footer>
	)
}

Footer.propTypes = {
	completedCount: PropTypes.number.isRequired,
	activeCount: PropTypes.number.isRequired,
	onClearCompleted: PropTypes.func.isRequired,
}

export default Footer
