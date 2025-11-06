// controllers/auth.controller.js
const home = async (req, res) => {
  try {
    res.status(200).send("hello amir how are you");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const register = async (req,res) => {
    try {
        res.status(200).send("this is out register page!")
    } catch (error) {
        res.status(400).send({msg:"gandmare error kyu de rha hai"})
        console.log(error);
        
    }
}

module.exports = { home , register};
