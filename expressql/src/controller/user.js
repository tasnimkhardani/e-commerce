const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: { product: true }

        });

        return res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}
const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
        })
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
            }
        return res.json(user)
    }
 catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
}
}

module.exports = { getAllUsers ,getUserById}