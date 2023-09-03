import { useEffect, useState } from "react"

export const useFetch = (func) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await func();
                setMovies(response.data)
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)

        }
        fetchData();
    }, [])

    return [isLoading , isError , movies , setMovies]

}

// عشان انده عليها لما اجي استخدمها
// const [isError , isLoading , users] = useFetch(url)