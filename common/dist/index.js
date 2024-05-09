"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoInput = exports.createTodoInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
// Signup
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
// Signin
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
// Creating a Todo
exports.createTodoInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
// Updating a Todo
exports.updateTodoInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    completed: zod_1.default.boolean().default(false).optional(),
    id: zod_1.default.string()
});
