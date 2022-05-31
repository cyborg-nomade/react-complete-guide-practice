import { useRouter } from "next/router";

// our-domain.com/news/detail

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send req to backend API
  // to fetch specific data

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
