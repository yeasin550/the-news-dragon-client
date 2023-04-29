import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams()
    const categoriesNews = useLoaderData()
    return (
      <div>
        {id && <h1>Category Pages : {categoriesNews.length}</h1>}
        {categoriesNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    );
};

export default Category;