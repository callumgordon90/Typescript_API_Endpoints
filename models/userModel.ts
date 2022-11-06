import * as mongoose from 'mongoose';
import { model } from 'mongoose';

type UserType = UserModel & mongoose.Document;

export interface UserModel {
    firstname: {
        type: String, 
        required: true
    }
    lastname: {
        type: String,
        required: true
    }
    mobile: {
        type: Number
    }
    age: {
        type: Number,
    }
    pincode: {
        type: Number,
    }
};

const Users = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String, 
        required: true
    },
    mobile: {
        type: Number
    },
    age: {
        type: Number,
    },
    pincode: {
        type: Number
    },
});

const Users: Model<UserType> = mongoose.model<UserType>('Users', UserSchema, 'Users');

export default Users;