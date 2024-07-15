import skillModel from "../models/skillModel.js";
import categoryModel from '../models/categoryModel.js'
import cloudinary from "../utils/cloudinary.js";
import slugify from 'slugify';

export const createSkillController = async (req, res) => {
  try {
    const { name, description, price, availability, category } = req.fields;
    const image = req.files.image.path;

    const result = await cloudinary.uploader.upload(image, {
      folder: 'ShareSkill',
      use_filename: true,
    });

    const skill = await skillModel({
      name,
      description,
      price,
      category,
      availability,
      instructor: req.user._id,
      slug: slugify(name),
      image: {
        public_id: result.public_id,
        url: result.secure_url
      },
    });

    await skill.save();

    res.status(200).send({
      success: true,
      message: 'Skill created successfully',
      skill,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error occurred in creating the skill',
      error,
    });
  }
};

// Get skill controller
export const getSkillController = async (req, res) => {
  try {
    const skill = await skillModel.find({});
    res.status(200).send({
      success: true,
      message: 'All skills',
      skill,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Error occurred in fetching the skills',
      error,
    });
  }
};

// Single skill controller
export const getSingleSkillController = async (req, res) => {
  try {
    const skill = await skillModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: 'Skill found',
      skill,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Error occurred while fetching the skill',
      error,
    });
  }
};

// Delete skill
export const deleteSkillController = async (req, res) => {
  try {
    await skillModel.findByIdAndDelete(req.params.sId);
    res.status(200).send({
      success: true,
      message: 'Skill deleted successfully',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Error occurred in deleting the skill',
      error,
    });
  }
};

// Update skill
export const updateSkillController = async (req, res) => {
  try {
    const { name, description, price, availability, category } = req.fields;
    let imageUrl, publicId;

    if (req.files && req.files.image) {
      const result = await cloudinary.uploader.upload(req.files.image.path, {
        folder: 'ShareSkill',
        use_filename: true,
      });
      imageUrl = result.secure_url;
      publicId = result.public_id;
    } else {
      const skill = await skillModel.findById(req.params.sId);
      imageUrl = skill.image.url;
      publicId = skill.image.public_id;
    }

    const skill = await skillModel.findByIdAndUpdate(req.params.sId, {
      name,
      description,
      price,
      category,
      availability,
      instructor: req.user._id,
      slug: slugify(name),
      image: {
        public_id: publicId,
        url: imageUrl,
      },
    }, { new: true });

    await skill.save();

    res.status(200).send({
      success: true,
      message: 'Skill updated successfully',
      skill,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error occurred in updating the skill',
      error,
    });
  }
};

export const skillCategoryController = async(req,res)=>{
  try {

    const category = await categoryModel.findOne({slug:req.params.slug})
    const course = await skillModel.find({category}).populate('category')
    res.status(200).send({
      success:true,
      message:'category fetched',
      category,
      course
    })
    
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:'error while getting course category',
      error
    })
  }
}





