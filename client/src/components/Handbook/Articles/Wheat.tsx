import { useAppSelector } from '../../../hooks/redux';

export function Wheat() {
	const articles = useAppSelector(state => state.articlesReducer.articles);
	const article = articles.find(obj => obj.title === 'Пшениця');

	return (
		<div>
			<div>{article?.title}</div>
			{article?.body}
		</div>
	);
}
