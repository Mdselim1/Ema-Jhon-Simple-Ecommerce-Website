import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(resp => resp.json())
            .then(data => setProduct(data))
    }, []);
    return [products];
};

export default useProduct;