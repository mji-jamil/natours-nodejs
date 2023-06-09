const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A tour must have a name'],
            unique: true,
            trim: true,
        },
        duration: {
            type: Number,
            required: [true, 'A tour must have e duration'],
        },
        maxGroupSize: {
            type: Number,
            required: [true, 'A tour must have a group size'],
        },
        difficulty: {
            type: String,
            required: [true, 'A tour must have a difficulty'],
        },
        ratingAverage: {
            type: Number,
            default: 4.5,
        },
        ratingQuantity: {
            type: Number,
            default: 0,
        },
        price: {
            type: Number,
            required: [true, 'A tour must have a price'],
        },
        priceDiscount: {
            type: Number,
        },
        summary: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
            required: [true, 'A tour must have a description'],
        },
        imageCover: {
            type: String,
            required: [true, 'A tour must have a cover image'],
        },
        images: [String],
        startDates: [Date]
    },
    { timestamps: true }
);

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
