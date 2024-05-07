import instance from "../config/axios.js"
export const CategoryService={
    fetchAllCategories:()=>{
        return instance.get("/api/category")
    },

}