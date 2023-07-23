import React, { useEffect, useState } from "react";
import { getBookData } from "../../Api";
import { Card, Image, Button } from "antd";

const BookSquare = () => {
  const [books, SetBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const book = await getBookData();
      if (book?.books) {
        SetBooks((prev) => [...prev, ...book?.books]);
      }
    };
    getBooks();
  }, []);
  return (
    <div className="flex flex-wrap mx-3 m-5">
      {books?.map((book, idx) => (
        <Card
          className="max-w-xs mx-2"
          title={book.title}
          key={idx}
          cover={<Image className="" src={book.image} />}
          actions={[<Button>Add To Cart</Button>]}
        ></Card>
      ))}
    </div>
  );
};

export default BookSquare;
