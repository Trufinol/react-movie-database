import React from 'react';
import {
	Menu,
	Input,
	Icon,
	Dropdown,
} from 'semantic-ui-react';
import './HeaderMenu.css';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

const options = [
  { key: 'movies', text: 'Movies', value: 'movies' },
  { key: 'actors', text: 'Actors', value: 'actors' },
  { key: 'serials', text: 'Serials', value: 'serials' },
]

export default class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			value: '',
			searchCategory: 'movies'
		}
  }

	handleChange = (e) => {
		const {value} = e.target;
		this.setState({value})
	}

	handleSelect = (e, {value}) => {
		this.setState({searchCategory: value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		// TODO: switch pages depending on the category
		const {value} = this.state;
		if(value.length > 1) {
			browserHistory.push({
				pathname: '/movies',
				query: {q: value}
			})
			this.setState({value: ''});
		}
	}

  render() {
		const {value} = this.state;
    return (
			<div className='header-menu'>
				<Menu secondary inverted>
					<Menu.Item>
						<Icon name='video' size='large' />
					</Menu.Item>
					<Menu.Item as={Link} to='/' activeClassName='active' onlyActiveOnIndex={true}>
						Home
					</Menu.Item>
					<Menu.Item>
						<form onSubmit={this.handleSubmit}>
							<Input
								placeholder='Search...'
								value={value}
								onChange={this.handleChange}
								action={<Dropdown options={options} defaultValue='movies' onChange={this.handleSelect} />}
							/>
						</form>
					</Menu.Item>
					<Menu.Item position='right'>
						<Icon name='log out' size='large' />
					</Menu.Item>
				</Menu>
			</div>
		);
  }
}

// HeaderMenu.propTypes = {
// };
