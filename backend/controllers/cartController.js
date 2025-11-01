

// add products to user cart

import userModel from "../models/userModel"

const addToCart = async (req, res) => {

    try {


        const { userId, itemId, size } = req.body

        const userData = await userModel.findById(userId)
        const cartData = await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                
            }
        }


    } catch (error) {
        
    }

}
 
// update products to user cart

const updateCart = async (req, res) => {
    
}

// get user cart data

const getUserCart = async (req, res) => {
    
}


export { addToCart, updateCart, getUserCart}