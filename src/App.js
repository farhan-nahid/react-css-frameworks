import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import "./App.css";
import NewsCard from "./components/NewsCard/NewsCard";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=6d5a93a1c37543e6b3e2fed8a6e07ea0"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App">
      {news.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {news.map((data, idx) => (
            <NewsCard key={idx} news={data} />
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
