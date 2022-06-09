import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getArticle } from '../../store/reducers/articlesSlice';
import { PlantIcon } from '../svg/PlantIcon';

export function Agriculture() {
	const dispatch = useAppDispatch();
	const articles = useAppSelector(state => state.articlesReducer.articles);
	return (
		<Fragment>
			<h3 className='handbook__list-title'>Агрокультура</h3>
			<ul className='handbook__list'>
				{articles.map(title => (
					<li className='handbook__list-item' key={title._id}>
						<Link
							to='/home/handbook/article'
							// TODO: find valid type to event
							onClick={(event: any) =>
								dispatch(
									getArticle(event.currentTarget.textContent)
								)
							}
						>
							<PlantIcon />
							{title.title}
						</Link>
					</li>
				))}
			</ul>
		</Fragment>
	);
}
