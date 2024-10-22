import Product from "../components/Product"
import './Productlist.css'

const Productlist = () =>{
    
    const Products = [
        {
            productName: 'TV',
            price: '2500',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/2636301/1.jpg?4094',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },

        {
            productName: 'iPhone',
            price: '1500',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/8290262/1.jpg?6242',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        
        {
            productName: 'Washing machine',
            price: '4500',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/6299052/1.jpg?0123',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },  

        {
            productName: 'Blender',
            price: '1000',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/1672752/1.jpg?4792',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }, 
    ]

    return(
        <div className="ProdList">
            {Products.map((product, index) =>(
                <Product 
                    key={index}
                    productName={product.productName}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    )
}

export default Productlist


