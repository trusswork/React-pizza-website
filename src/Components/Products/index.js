import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements'
const Products = ( {Heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{Heading}</ProductsHeading>
            <ProductWrapper>
                {data.map ( (product, index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} /> 
                            <ProductInfo>
                                <ProductInfo>{product.name}</ProductInfo>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard> 
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
