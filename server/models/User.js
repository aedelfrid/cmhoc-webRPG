const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        avatar: {
            type: String,
        },
        messages: [userMessagesSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.statics.upsertGoogleUser = async function (data) {
    const { email, name, picture } = data;

    const user = await this.findOne({ email });

    if (!user) {
        const newUser = await this.create({
            username: name || `${data.family_name}${data.given_name}`,
            email: email,
            avatar: picture,
            password: 'newPassword',
        });
        return newUser;
    }
    return user;
};


const User = model('User', userSchema);

module.exports = User;