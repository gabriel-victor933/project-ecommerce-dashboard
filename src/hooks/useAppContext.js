import { useContext } from "react";
import { AppContext } from "../context/context";

export default function useAppContext(){
    return useContext(AppContext)
}