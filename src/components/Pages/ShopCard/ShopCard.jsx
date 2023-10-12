import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { FiDollarSign } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ShopCard = ({ item }) => {
    const navigate = useNavigate();
    const { name, price, subtitle, image } = item;
    const { user } = useContext(AuthContext);

    const addOrderItem = (addItem) => {
        if (user) {
            const { _id, category, name, price, subtitle, image } = addItem;
            const addItemCart = { name, price, subtitle, category, image, id: _id, email: user?.email };

            fetch('https://chef-hunter-server-sigma.vercel.app/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addItemCart)
            }).then(res => res.json())
                .then(data => {
                    toast.success(`Hey ${user?.displayName}, Your product is add`)
                });

        }
        else {
            navigate('/login');
            toast.error('You have to login first');
        }
    }
    return (
        <>
            <div className=' shadow p-5 rounded'>
                <div className='flex '>
                    <div>
                        <img className='hover:scale-105 w-300 h-200 object-cover transition overflow-hidden' src={image} alt="images" />
                    </div>
                    <div>
                        <button onClick={() => addOrderItem(item)}><MdAddShoppingCart title='Order cart' className='hover:text-orange-400 text-orange-300 transition' size={30}></MdAddShoppingCart></button>
                    </div>
                </div>
                <div className=' text-right'>
                    <h1 className='text-xl'>{name}</h1>
                    <h1>{subtitle}</h1>
                    <span className='font-bold flex items-center justify-end'><FiDollarSign className='h-6'></FiDollarSign>{price}</span>
                </div>
            </div>
        </>
    );
};

export default ShopCard;