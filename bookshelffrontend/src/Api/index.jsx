import axios from "axios";
import { notification } from "antd";
export const getBookData = async () => {
  try {
    const response = await axios.get(
      "https://api.itbook.store/1.0/search/mongodb"
    );
    if (!response) {
      throw new Error("No Books Found");
    }
    return response.data
    
  } catch (error) {
    notification.open({
      message: "Error",
      description: error,
      duration: 3,
      placement: "topRight",
    });
  }
};
