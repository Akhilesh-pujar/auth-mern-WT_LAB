const {Router} = require("express");
const useRouter = require("./user");
const addphoto = require("./addingphoto");


const router = Router();
router.use("/addingphoto",addphoto);

router.use("/user",useRouter);


module.exports = router;
