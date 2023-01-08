import { useEffect, useState } from "react";
import CategoriesMock from "../mocks/CategoriesMock";

export default function useCategories(){
    const [list, setList] = useState([])

    useEffect(()=>{
        const categories = CategoriesMock
        // console.warn(CategoriesMock)
        setList(categories)
    },[])

    return [list]
}