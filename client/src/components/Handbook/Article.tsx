import { useAppSelector } from '../../hooks/redux';

export function Article() {
	const articles = useAppSelector(state => state.articlesReducer.articles);
	const currentArticle = useAppSelector(state => state.articlesReducer.title);
	const article = articles.find(obj => obj.title === currentArticle);
	return (
		<div className='article'>
			<h3 className='article__title'>{article?.title}</h3>
			<p className='article__text'>{article?.body}</p>
		</div>
	);
}
