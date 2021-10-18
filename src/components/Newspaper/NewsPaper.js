import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import News from "../News/News";

const NewsPaper = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=6d5a93a1c37543e6b3e2fed8a6e07ea0"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {articles.map((article, index) => (
          <Grid item xs={2} sm={4} md={4}>
            <News article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsPaper;
