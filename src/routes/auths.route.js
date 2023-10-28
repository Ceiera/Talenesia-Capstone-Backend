import  express  from "express";

const router = express.Router();

router.post('/login', (req, res) => {
    try {
        const {email, password, loginFrom} = req.body
        if (!(email, password , loginFrom)) {
            return res.status(400).send({
                message: 'Missing Body'
            })
        }

        const userDetails = {
            email, password, loginFrom
        }

        
    } catch (error) {
        
    }
})