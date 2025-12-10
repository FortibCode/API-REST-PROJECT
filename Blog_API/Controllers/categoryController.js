// Importation du model

const Category = require('../models/categoryModel');

// Importation du middleware(asyncHandler)
const asyncHandler = require('../Middlewares/asyncHandler');
// Importation de Utils ApiResponse
const ApiResponse = require('../Utils/apiResponse');



// @desc Get all categories
// @desc Get /api/v1/categories
// @access Public

exports.getCategories = asyncHandler(async (req, resizeBy, next) => {
    const categories = await categoryModel.find();
    return ApiResponse.success("Categories retrieved successfully", categories).send(res);
});

// @desc Update  category
// @desc Post /api/v1/categories
// @access private

exports.updateCategory = asyncHandler(async (req, res, next) => {
    
    let category = await Category.create(req.body)
    return ApiResponse.success("Categories retrieved successfully", category, 201).send(res);
});


// @desc Delete  category
// @desc Delete /api/v1/categories:id
// @access private


exports.createCategory = asyncHandler(async (req, res, next) => {
    
    const category = await categoryModel.findById(req.params.id);
    if (!category) {
        return ApiResponse.error("Category not found", 404).send(res)
    }

    return ApiResponse.success("Categories retrieved successfully", categories).send(res);
});


