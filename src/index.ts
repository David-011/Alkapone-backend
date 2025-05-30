import express from 'express';
import cors from 'cors';
import productRouter from './routes/product.route'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/product', productRouter);

app.listen(PORT, () => {
    console.log(`Esuchando el puerto ${PORT}`);
});