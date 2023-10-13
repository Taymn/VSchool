import React from 'react'; // Step 1
import { Link, useNavigate } from 'react-router-dom'; // p5 Import Link
import productData from './productData'; //params 1

export default function Products() {

    const navigate = useNavigate()

    const products = productData.map(product => (
        <h3 key={product._id}> {/* params 3 */}
            <Link to={`/products/${product._id}`}>{product.name}</Link> - ${product.price} {/* params 4 */}
        </h3> /* params 3 */
    )) /* params 2 */

    return (
        <div style={{ padding: 20 }}>
            <h2>Products - 2</h2>

            <p>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content.</p>

            <button onClick={() => navigate('/checkout')}>
                Check Out
            </button>
            <button onClick={() => navigate('/')}>
                Return to Home
            </button>
            <button onClick={() => navigate(1)}>
                Go Forward 1
            </button>
            <button onClick={() => navigate(-1)}>
                Go Back 1
            </button>

            <div>
                <h1>Products List Page</h1>
                {products}
            </div>
        </div>
    );
}