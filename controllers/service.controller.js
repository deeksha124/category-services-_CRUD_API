const db = require("../config/db.config")


exports.serviceCategoryId = async (req, res) => {
    const categoryId = req.params.categoryId;
    const { service_name, type } = req.body;
    try {
        const result = await db.query('INSERT INTO services (category_id, service_name, type) VALUES (?, ?, ?)', [categoryId, service_name, type]);
        res.status(201).json({'msg' :'Service added successfully'});
    } catch (err) {
        console.error('Error adding service:', err);
        res.status(500).json({'msg' : 'Internal Server Error'});
    }
};

exports.getserviceCategoryId = async (req, res) => {
    const categoryId = req.params.categoryId;
    try {
        const results = await db.query('SELECT * FROM services WHERE category_id = ?', [categoryId]);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error fetching services:', err);
        res.status(500).json({'msg' : 'Internal Server Error'});
    }
};

exports.updatecategoryIdserviceId = async (req, res) => {
    const { categoryId, serviceId } = req.params;
    const { service_name, type } = req.body;
    try {
        const result = await db.query('UPDATE services SET service_name = ?, type = ? WHERE id = ? AND category_id = ?', [service_name, type, serviceId, categoryId]);
        res.status(200).json({'msg':'Service updated successfully'});
    } catch (err) {
        console.error('Error updating service:', err);
        res.status(500).json({'msg' : 'Internal Server Error'});
    }
};

exports.deletecategoryIdserviceId = async (req, res) => {
    const { categoryId, serviceId } = req.params;
    try {
        const result = await db.query('DELETE FROM services WHERE id = ? AND category_id = ?', [serviceId, categoryId]);
        res.status(200).json({'msg' : 'Service deleted successfully'});
    } catch (err) {
        console.error('Error deleting service:', err);
        res.status(500).json({'msg' : 'Internal Server Error'});
    }
};

