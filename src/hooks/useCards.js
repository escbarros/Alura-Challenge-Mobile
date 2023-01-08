import { useEffect, useState } from "react";
import CardsMock from "../mocks/CardsMock";

export default function useCards(){
    const [list, setList] = useState([])

    useEffect(()=>{
        const cards = CardsMock
        setList(cards)
    },[])

    return [list]
}