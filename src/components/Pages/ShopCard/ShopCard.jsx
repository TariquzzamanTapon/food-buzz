import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { FiDollarSign } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const ShopCard = ({ item }) => {
    // const navigate = useNavigate();
    // const location = useLocation();
    const { name, price, subtitle, image } = item;
    const {user} = useContext(AuthContext);

    const addOrderItem = (item) => {
        if(user){
            toast.success('Hey item added, Check your item');
        }
        <Navigate to='/login' replace={true}></Navigate>
    }
    return (
        <>
            <div className=' shadow p-5 rounded'>
                <div className='flex '>
                    <div>
                        <img className='hover:scale-105 w-300 h-200 object-cover transition' src={image} alt="images" srcset="" />
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