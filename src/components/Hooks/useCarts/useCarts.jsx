import { data } from "autoprefixer";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


export const useCarts = (cart) => {
    const [carts, setCarts] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch(`https://chef-hunter-server-sigma.vercel.app/carts?email=${user?.email}`,{
            method : "POST",
            headers:{
                'content-type': 'application/json'
            },
            body : JSON.stringify(cart)
        })
        .then(res=>res.json())
        .then(data=> {
            setCarts(data)
        },[]);
    })
    return [carts];
};
