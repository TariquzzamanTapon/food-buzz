import { useState } from "react"
import { useEffect } from "react"

export const useMenu = (currentFilter) => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        const url = `https://chef-hunter-server-sigma.vercel.app/menu?sort=${currentFilter}`;
        console.log(url);
        fetch(`https://chef-hunter-server-sigma.vercel.app/menu?sort=${currentFilter}`)
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false)
            })
    }, [currentFilter])

    return [menu, loading];
}