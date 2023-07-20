const createProduct = async (req, res) => {
  res.send('create product');
};

const getAllProducts = async (req, res) => {
  res.send('getAllProducts');
};

const getSingleProduct = async (req, res) => {
  res.send('get single product');
};

const updateProduct = async (req, res) => {
  res.send('update product');
};

const deleteProduct = async (req, res) => {
  res.send('delete product');
};

const uploadImage = (req, res) => {
  res.send('uploda image');
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
