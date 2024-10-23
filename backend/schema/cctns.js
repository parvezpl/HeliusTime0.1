const mongoose = require('mongoose');
const { Schema } = mongoose;

// Defining a schema for multi-data with nested data
const multiDataSchema = new Schema({
    dataType: {
        type: String,
        required: true,
        enum: ['User', 'Cctnswork'], // Differentiates the type of data
    },

    // Fields for User data with nested address and preferences
    userData: {
        name: { type: String },
        email: { type: String },
        password: {
            type: String,
            required: true,
        },
        address: {
            state: { type: String },
            dist: { type: String },
            ps: { type: String },
        },
        preferences: {
            notifications: { type: Boolean, default: true },
            type: { type: String, enum: ['oprater', 'constable'], default: 'constable' },
        },
    },

    // Fields for Product data with nested dimensions and reviews
    cctnsData: {
        workName: { type: String },
        smsData: {
            sms: { type: String },
            time: {
                type: Date,
                default: Date.now,
            },
        },
        reviews: [{
            username: { type: String },
            rating: { type: Number, min: 1, max: 5 },
            comment: { type: String },
        }],
    },

    // Common fields for both User and Product
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Pre-save validation hook based on dataType
multiDataSchema.pre('save', function (next) {
    if (this.dataType === 'User' && (!this.userData || !this.userData.name)) {
        return next(new Error('User data must include a name'));
    }
    if (this.dataType === 'Cctnswork' && (!this.cctnsData || !this.cctnsData.workName)) {
        return next(new Error('Product data must include a product name'));
    }
    next();
});


const CctnsData = new mongoose.model("CctnsData", multiDataSchema)
module.exports = CctnsData;

// const MultiData = mongoose.model('MultiData', multiDataSchema);

// // Example usage: Saving a user with nested address and preferences
// const newUser = new MultiData({
//   dataType: 'User',
//   userData: {
//     name: 'Jane Doe',
//     email: 'jane@example.com',
//     age: 28,
//     address: {
//       street: '456 Elm St',
//       city: 'Somewhere',
//       postalCode: '12345',
//     },
//     preferences: {
//       notifications: true,
//       theme: 'dark',
//     },
//   },
// });

// newUser.save()
//   .then(() => console.log('User saved with nested data!'))
//   .catch((err) => console.error('Error:', err));

// // Example usage: Saving a product with nested dimensions and reviews
// const newProduct = new MultiData({
//   dataType: 'Product',
//   productData: {
//     productName: 'Smartphone',
//     price: 999,
//     category: 'Electronics',
//     stockQuantity: 100,
//     dimensions: {
//       weight: 0.5,
//       height: 15,
//       width: 7,
//       depth: 0.8,
//     },
//     reviews: [
//       { username: 'user123', rating: 5, comment: 'Great product!' },
//       { username: 'shopper99', rating: 4, comment: 'Good value for money.' },
//     ],
//   },
// });

// newProduct.save()
//   .then(() => console.log('Product saved with nested data!'))
//   .catch((err) => console.error('Error:', err));