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
  data: string;
  image: string;
}

interface INewsFeed {
  key: string;
  data : NewsFeedChild
}

interface NewsFeedChild {
  data: string;
  image: string
}
