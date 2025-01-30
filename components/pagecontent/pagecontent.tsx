"use client"
import React from 'react';
import { PageData } from './pageData';
import './pagecontent.scss';

const PageContent: React.FC<PageData> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="page-content__container">
      <h2 className="page-content__title">{title}</h2>
      <div className="page-content__content">
        <img src={imageUrl} className="page-content__image" />
        <p className="page-content__description">{description}</p>
      </div>
    </div>
  );
};

export default PageContent;