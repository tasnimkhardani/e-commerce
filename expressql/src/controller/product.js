const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllProduct = async (req, res) => {
    try {
        const product = await prisma.product.findMany()

        return res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
}

const getProductById = async (req, res) => {
    try {
        const idProduct = req.params.id
        const product = await prisma.product.findUnique(
            {
                where: {
                    id: Number(idProduct)
                }
            }
        )
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        return res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
}
const createProduct = async (req, res) => {
    try {

        //const { name, description, userId } = req.body;
        const productData = req.body;
        const existProduct = prisma.product.findUnique({
            where:{
                name: productData.name,
                userId:productData.userId
            }
        })
        if(existProduct){
            return res.json({error:"prod mawjoud"})
        }
        const product = await prisma.product.create({
            data: productData
        })
        return res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create product' });

    }
}
module.exports = { getAllProduct, getProductById, createProduct }