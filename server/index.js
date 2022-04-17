import express from 'express';
import bodyParse from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routers/posts.js';

const app = express();

app.use(bodyParse.json({limit: "30mb", extended: true}));
app.use(bodyParse.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://memoriesapp:UkUTitybDj7JiRC8@cluster0.oy5db.mongodb.net/MemoriesDB?retryWrites=true&w=majority";
const PORT = process.env.PORT ?? 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

