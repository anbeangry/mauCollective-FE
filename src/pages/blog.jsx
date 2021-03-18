import React from 'react'
import { graphql } from 'gatsby'

import BlogLayout from 'layouts/BlogLayout'
import CardPost from 'components/shared/CardPost'

const BlogPage = () => {
  return (
    <BlogLayout title="NEWS JG">
      <div className="flex flex-col">
        <h1 className="hidden lg:block font-black text-2xl md:text-3xl xl:text-5xl mb-8 xl:mb-16 uppercase xl:tracking-wide">NEWS</h1>
        <div className="grid grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-x-6 gap-y-12">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
    </BlogLayout>
  )
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default BlogPage