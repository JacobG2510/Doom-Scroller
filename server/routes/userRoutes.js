const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    signInUser,
    updateUser,
    deleteUser,

} = require('../controllers/userControllers.js');

// /api/users
router.route('/').get(getUsers)
router.route("/signup").post(createUser)
router.route("/signin").post(signInUser)
// /api/users/:userId
router.get("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser)


module.exports = router;