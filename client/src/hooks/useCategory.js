import { useEffect, useState } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  // get categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/category/get-category");
      console.log("API Response Data:", data); // Log to verify the structure
      // Set categories using the correct key 'category'
      setCategories(data?.category || []); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
