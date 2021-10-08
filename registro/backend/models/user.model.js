const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    lat:{
      type: Number,
    },
    long:{
      type: Number,
    }
});
usuarioSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.contrasena)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
usuarioSchema.pre('save', function (next) {
	if (!this.contrasena) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
    console.log("sapo");
		this.contrasena = this.hashPassword(this.contrasena,10)

		next()
	}
})
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
