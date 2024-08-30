import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Modal, Button, Typography, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { NavLink } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false); // State to handle Snackbar visibility
    const [modalOpen, setModalOpen] = useState(false); // State to handle Modal visibility

    // Get cart state from Redux store
    const cart = useSelector((state) => state.cart);

    // Find the specific property in the cart
    const cartItem = cart.items.find(item => item.id === property.id);
    const cartItemCount = cartItem ? cartItem.quantity : 0; // Get the quantity if the item is found

    // Handle adding to cart
    const handleAddToCart = () => {
        dispatch(addToCart(property));
        setOpen(true); // Show Snackbar
    };

    // Handle removing from cart
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(property.id));
    };

    // Handle closing Snackbar
    const handleClose = () => {
        setOpen(false);
    };

    // Handle opening and closing the modal
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className="border rounded-lg overflow-hidden shadow-md relative">
            <img src={property.image} alt={property.title} className="w-full h-40 object-cover" />
            <button
                onClick={handleOpenModal}
                className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
            >
                <InfoOutlinedIcon />
            </button>
            <div className="p-4">
                <h2 className="text-lg font-bold">{property.title}</h2>
                <p className="text-gray-600">{property.description}</p>
                <p className="text-blue-600 font-bold">${property.price}</p>

                {/* Book Now Button and Cart Info */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleAddToCart}
                        className="block mt-2 bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Book Now
                    </button>

                    {cartItemCount > 0 && (
                        <button
                            onClick={handleRemoveFromCart}
                            className="block mt-2 bg-red-500 text-white text-center py-2 px-4 rounded hover:bg-red-600"
                        >
                            Remove
                        </button>
                    )}
                </div>
                {cartItemCount > 0 && (
                    <div className="flex items-center justify-between">
                        <div className="mt-2 text-sm text-gray-600">
                            {cartItemCount} item{cartItemCount > 1 ? 's' : ''} in the cart
                        </div>
                        <NavLink to='/cart' className='text-sm mt-2 text-gray-600 underline decoration-dotted'>Go to cart</NavLink>
                    </div>
                )}

                {/* Snackbar Alert */}
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Item added to the cart
                    </Alert>
                </Snackbar>
            </div>

            {/* Modal for Property Details */}
            <Modal
                open={modalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90%', sm: 400 },
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 2,
                        overflow: 'auto'
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2" mb={2}>
                        {property.title}
                    </Typography>
                    <img src={property.image} alt={property.title} className="w-full mb-2 h-40 object-cover" />
                    <Typography id="modal-description" variant="body1" paragraph>
                        {property.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        Price: ${property.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={2}>
                        Location: {property.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Bedrooms: {property.bedrooms}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Amenities: {property.amenities}
                    </Typography>
                    <Button onClick={handleCloseModal} variant="outlined" color="primary" sx={{ mt: 2 }}>
                        Close
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default PropertyCard;
