import { Router } from "express";
import UserController from "../controllers/user.controller";
import AdminCheck from "../middlewares/adminCheck";

const router = Router();

router.put("/", UserController.update);

router.patch("/change-password/:id", UserController.changePassword);

router.patch("/change-role", AdminCheck, UserController.changeRole);

const userRoute = router;
export default userRoute;

/**
 * @swagger
 * /users:
 *  put:
 *    tags:
 *      - User
 *    description: Change details of current user and return your new profile details
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: YourNewName
 *              email:
 *                type: string
 *                format: email
 *              phone:
 *                type: string
 *                example: YourNewPhone
 *    responses:
 *      200:
 *        description: Successful
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      401:
 *        description: Email already exists
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Email already exists !
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: user not found
 * /users/change-role/{id}:
 *  patch:
 *    tags:
 *      - User
 *    description: Change role of user with id and return your profile details
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: id
 *        in: path
 *        description: User ID
 *        required: true
 *        schema:
 *          type: string
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              role:
 *                type: string
 *                enum: ["PERSON","AUTHOR","ADMIN","SUPER_ADMIN"]
 *    responses:
 *      200:
 *        description: Successful
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: user not found
 * /users/change-passowrd:
 *  patch:
 *    tags:
 *      - User
 *    description: Change passowrd of user
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              passowrd:
 *                type: string
 *                example: NewPassword
 *    responses:
 *      200:
 *        description: Successful
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message: 
 *                  type: string
 *                  example: Password has successfuly changed.
 *      401:
 *        description: Invalid password
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Invalid password
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: user not found
 */
