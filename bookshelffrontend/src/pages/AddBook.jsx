import { useFormik } from "formik";

const AddBook = () => {
  const formik = useFormik({
    initialValues: {
      titleName: "",
      author: "",
      imageUrl: "",
      price: "",
    },
    onSubmit: (values) => {
      console.log("values", JSON.stringify(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div className="w-full flex-1 mt-1">
        <form onSubmit={formik.handleSubmit} className="mx-auto max-w-xs">
          <input
            id="titleName"
            name="titleName"
            type="text"
            className="w-full px-8 py-2 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
            placeholder="Enter Book Title"
            onChange={formik.handleChange}
            value={formik.values.titleName}
          />

          <input
            id="author"
            name="author"
            type="text"
            className="w-full px-8 py-2 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
            placeholder="Enter Book Author"
            onChange={formik.handleChange}
            value={formik.values.author}
          />

          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            className="w-full px-8 py-2 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
            placeholder="Enter Book ImageUrl"
            onChange={formik.handleChange}
            value={formik.values.imageUrl}
          />

          <input
            id="price"
            name="price"
            type="number"
            className="w-full px-8 py-2 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
            placeholder="Enter Price "
            onChange={formik.handleChange}
            value={formik.values.price}
          />

          <button
            type="submit"
            className="mt-3 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <span className="ml-3">Add Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
