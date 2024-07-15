import categoryModel from "../models/categoryModel.js";
import slugify from 'slugify'


export const createCategoryController = async(req,res)=>{
    try {
        const{name, slug}= req.body;
    if(!name){
        return res.status(400).send({
            success:false,
            message:' Category name is required',

        })
    }

    const existingCategory = await categoryModel.findOne({name})
    if(existingCategory){
        return res.status(400).send({
            success:false,
            message:'Category already exist'
        })
    }

    const category = await new categoryModel({name,slug:slugify(name)}).save();

    res.status(200).send({
        success:true,
        message:'Category created successfully',
        category
    })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'Error in creating category',
            error
        })
    }
}

//update category
export const updateCategoryCOntroller = async(req,res)=>{
        try {
            const{name}= req.body;
            const {id} = req.params;
        
            const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
            res.status(200).send({
                success:true,
                message:'category updated successfully',
                category
            })
            
        } catch (error) {
            res.status(500).send({
                success:false,
                message:'Error occured in updating the category',
                error
            })
        }
}

//get All categories

export const getAllCategoryController = async(req,res)=>{
    try {
        const category = await categoryModel.find()
        res.status(200).send({
            success:true,
            message:'all categories',
            category
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'error in getting categories',
            error
        })
    }


}

//get single category 
export const getSingleCategoryController = async(req,res)=>{
    try {
        const category = await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:'category accessed',
            category
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'error in getting the category',
            error
        })
    }
}


//delete category

export const deleteCategoryController = async(req,res)=>{
    try {
        await categoryModel.findByIdAndDelete(req.params.sId)
        res.status(200).send({
            success:true,
            message:'Category deleted successfully',

        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'Error in deleting the category',
            error
        })
    }
}



