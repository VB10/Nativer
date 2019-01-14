interface Articles {
  key: String | null;
  data: ArticlesChild;
}
interface ArticlesChild {
  title: string;
  description: string;
  email: string;
  price: number;
  category: string;
}

interface INewsFeed {
  key: String;
  data : NewsFeedChild
}

interface NewsFeedChild {
  data: String;
}
