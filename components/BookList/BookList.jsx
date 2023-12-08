import React from 'react'
import BookCard from '../BookCard/BookCard'

export default function BookList() {
  return (
    <>
      {
        [1,2,3].map((item, index) => (
          <BookCard key={index}/>
        ))
      }
    </>
  )
}