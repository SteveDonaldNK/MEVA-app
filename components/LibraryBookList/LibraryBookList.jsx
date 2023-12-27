import React from 'react'
import LibraryBookCard from '../LibraryBookCard/LibraryBookCard'

export default function LibraryBookList({books}) {
  return (
    books.map((item, key) => (
        <LibraryBookCard key={key} author={item.author} img={item.img} name={item.name} />
    ))
  )
}