import { useEffect, useState } from "react"
import { getProducts } from "../API/productAPI"

export const useFetch = (func) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await func();
                setProducts(response.data)
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)

        }
        fetchData();
    }, [])

    return [isLoading , isError , products , setProducts]

}

// عشان انده عليها لما اجي استخدمها
// const [isError , isLoading , users] = useFetch(url)