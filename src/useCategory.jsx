import './CSS/Home.css'
import { useState, useEffect } from "react"

const useCategory = (category, limit, skip) => {
    const [products, setProduct] = useState([])
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoad(true)
        setError(null)

        fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`, {
            headers: {
                'User-Agent': 'the-odin-project'
            }
        })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('server error')
                }
                    return response.json()
            })
            .then((response) => setProduct(response.products))
            .catch((error) => setError(error))
            .finally(() => setLoad(false))
        }, [category, limit, skip])
        
    return {products, load, error}

}

export default useCategory