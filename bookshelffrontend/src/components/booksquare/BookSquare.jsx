import React, { useEffect, useState } from "react";
import { getBookData } from "../../Api";
import { Card, Image, Button } from "antd";
import AddBook from "../../pages/AddBook";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeaddBook } from "../../store/bookReducerSlice";

const BookSquare = () => {
  const dispatch = useDispatch();
  const isAddBook = useSelector((state) => state.book.isAddBook);
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
      <AddBook />
      {isAddBook ? (
        <Modal
          title="Example Modal"
          open={isAddBook}
          onCancel={() => dispatch(closeaddBook())}
          width={600}
        >
          {<AddBook />}
        </Modal>
      ) : undefined}
    </div>
  );
};

export default BookSquare;
