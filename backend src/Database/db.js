import mongoose from 'mongoose';
import db from '../Database/schema';

mongoose.connect(MONGO_URL);
mongoose.model(db);

