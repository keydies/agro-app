import { useAppSelector } from '../../hooks/redux';

export function Article() {
	const articles = useAppSelector(state => state.articlesReducer.articles);
	const currentArticle = useAppSelector(state => state.articlesReducer.title);
	const article = articles.find(obj => obj.title === currentArticle);
	return (
		<div>
			<div>{article?.title}</div>
			{article?.body}
		</div>
	);
}
