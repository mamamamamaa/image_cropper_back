"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const regex_1 = require("../../helpers/regex");
exports.UserSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 3,
        maxLength: 20,
    },
    email: {
        type: String,
        matches: regex_1.emailRegex,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: 8,
    },
    accessToken: {
        type: String,
        default: null,
    },
    verificationToken: {
        type: String,
        default: null,
    },
    verify: {
        type: Boolean,
        default: false,
    },
}, {
    versionKey: false,
    timestamps: true,
});
//# sourceMappingURL=user.schema.js.map