import './Product.css'

const Product = (props) =>{

    const {productName, price, imageUrl, description} = props

    return(
        <div className='productCont'>
            <img src={imageUrl} alt="productimage" />
            <h3>{productName}</h3>
            <p>${price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Product