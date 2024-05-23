
const db = require("../config/db.config")

// Category APIs
exports.category = async (req, res) => {
    try {
        const { category_name } = req.body;
        if (!category_name) {
            return res.status(400).json({'msg' : 'Category name is required'});
        }

        const [result] = await db.query('INSERT INTO categories (category_name) VALUES (?)', [category_name]);
        console.log("result" , result)
        if(result.affectedRows > 0)
            {
                res.status(201).json({'msg' : 'Category added successfully'});
            }
    } catch (err) {
        console.error('Error adding category:', err);
        res.status(500).json({'msg':'Internal Server Error'});
    }
};

exports.getcategories = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM categories');
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching categories:', err);
        res.status(500).send('Internal Server Error');
    }
};



exports.updateCategoryByID = async (req, res) => {
    const categoryId = req.params.categoryId;
    const { category_name } = req.body;

    if (!category_name) {
        return res.status(400).json({'msg' :'Category name is required'});
    }

    try {
        const result = await db.query('UPDATE categories SET category_name = ? WHERE id = ?', [category_name, categoryId]);
        res.status(200).json({'msg' : 'Category updated successfully'});
    } catch (err) {
        console.error('Error updating category:', err);
        res.status(500).json({'msg':'Internal Server Error'});
    }
};


exports.deleteCategoryByID = async (req, res) => {
    const categoryId = req.params.categoryId;

    try {
        const result = await db.query('DELETE FROM categories WHERE id = ?', [categoryId]);
        if (result.affectedRows === 0) {
            return res.status(404).json({'msg' : 'Category not found'});
        }
        res.status(200).json({'msg' : 'Category deleted successfully'});
    } catch (err) {
        console.error('Error deleting category:', err);
        res.status(500).json({'msg':'Internal Server Error'});
    }
};
