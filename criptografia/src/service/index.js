const crypto = require('crypto');
const { encryptModel } = require("../model/model")

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';


const encrypt = async function (req, res) {
    if (req.body.text !== undefined) {
        const cipher = crypto.createCipher(algorithm, secretKey)
        const crypted = cipher.update(req.body.text, 'utf-8', "hex")
        await encryptModel.create({ text: crypted })
        res.json({name:'faz certo - que dá certo'})
    }else{
        res.json({code:'e_validation_failure',message:'o campo \'name\' é obrigatoria'})
    }
};

const decrypt = async function (req, res) {
    let t = await encryptModel.findByPk(parseInt(req.params.id), {
        attributes: [
            'id', 'text'
        ]
    })
    let { id, text } = t.dataValues

    const decipher = crypto.createDecipher(algorithm, secretKey)
    const plain = decipher.update(text, 'hex', 'utf-8')
    res.json({ id: id, text: plain })
};

module.exports = {
    encrypt,
    decrypt
};