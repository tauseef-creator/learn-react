import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const[products, setProducts] = useState<string[]>([]);
    useEffect(() => {
        console.log('fetching')
        setProducts(['Household', 'Electronics', 'Grocery'])
    }, [])
  return (
    <div>ProductList</div>
  )
}

export default ProductList