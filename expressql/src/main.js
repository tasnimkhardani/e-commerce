const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

const userRouter = require('./routes/user')
const productRouter = require('./routes/product')


app.use('/user',userRouter)
app.use('/product',productRouter)

app.listen(port, () =>
  console.log(`🚀 Server ready at: http://localhost:${port}`)
);
