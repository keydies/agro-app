export interface IArticles {
	_id: string;
	title: string;
	body: string;
}

export interface IArticlesState {
	articles: IArticles[];
	title: string;
}
