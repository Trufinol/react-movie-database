import React, {PropTypes} from 'react';
import {Menu} from 'semantic-ui-react';
import './Pagination.css';

export default class Pagination extends React.Component {

	handleItemClick = (e, { index, disabled }) => {
		if(disabled) return null;
		this.props.handleFetchPage(index)
	}

  render() {

		const paginationPages = (currentPage, totalPages) => {
			let i = 1;
			let items = [];

			if(totalPages <= 5) {
				for(i; i <= totalPages; i++) {
					items.push(
						<Menu.Item
							name={`${i}`}
							key={i}
							index={i}
							active={i === currentPage}
							onClick={this.handleItemClick}
						/>
					)
				}
			} else {
				if(currentPage <= 3) {
						items.push(
							<Menu.Item
								name='1'
								key={1}
								index={1}
								active={1 === currentPage}
								onClick={this.handleItemClick}
							/>,
							<Menu.Item
								name='2'
								key={2}
								index={2}
								active={2 === currentPage}
								onClick={this.handleItemClick}
							/>,
							<Menu.Item
								name='3'
								key={3}
								index={3}
								active={3 === currentPage}
								onClick={this.handleItemClick}
							/>,
							<Menu.Item key={'d' + currentPage} disabled>...</Menu.Item>,
							<Menu.Item
								name={`${totalPages}`}
								key={totalPages}
								index={totalPages}
								onClick={this.handleItemClick}
							/>
						)
				} else if(currentPage === totalPages - 1) {
					items.push(
						<Menu.Item
							name='1'
							index={1}
							key={1}
							onClick={this.handleItemClick}
						/>,
						<Menu.Item disabled key={'d'+currentPage}>...</Menu.Item>,
						<Menu.Item
							name={`${currentPage}`}
							key={currentPage}
							index={currentPage}
							active={true}
							onClick={this.handleItemClick}
						/>,
						<Menu.Item
							name={`${totalPages}`}
							key={totalPages}
							index={totalPages}
							onClick={this.handleItemClick}
						/>
						)
				} else if (currentPage === totalPages) {
					items.push(
						<Menu.Item
							name='1'
							key={1}
							index={1}
							onClick={this.handleItemClick}
						/>,
						<Menu.Item disabled key={'d'+currentPage}>...</Menu.Item>,
						<Menu.Item
							name={`${totalPages - 1}`}
							key={totalPages - 1}
							index={totalPages - 1}
							onClick={this.handleItemClick}
						/>,
						<Menu.Item
							name={`${totalPages}`}
							key={totalPages}
							index={totalPages}
							active={true}
							onClick={this.handleItemClick}
						/>
						)
				} else {
					items.push(
						<Menu.Item
							name='1'
							key={1}
							index={1}
							active={i === currentPage}
							onClick={this.handleItemClick}
						/>,
						<Menu.Item disabled key={'d'+currentPage}>...</Menu.Item>,
						<Menu.Item
							name={`${currentPage}`}
							key={currentPage}
							index={currentPage}
							active={true}
							onClick={this.handleItemClick}
						/>,
						<Menu.Item disabled key={'d'+totalPages}>...</Menu.Item>,
						<Menu.Item
							name={`${totalPages}`}
							key={totalPages}
							index={totalPages}
							onClick={this.handleItemClick}
						/>
					)
				}
			}
			return items;
		}

		const {currentPage, totalPages} = this.props;
		const renderPagination = paginationPages(currentPage, totalPages);
    return (
			<div className='pagination-wrapper'>
				<Menu pagination>
					<Menu.Item icon='chevron left'
						index={currentPage - 1}
						onClick={this.handleItemClick}
						disabled={currentPage === 1}
					/>
					{renderPagination}
					<Menu.Item
						icon='chevron right'
						index={currentPage + 1}
						onClick={this.handleItemClick}
						disabled={currentPage === totalPages}
					/>
				</Menu>
			</div>
		);
  }
}

Pagination.propTypes = {
	currentPage: PropTypes.number,
	totalPages: PropTypes.number,
	handleFetchPage: PropTypes.func.isRequired
};
