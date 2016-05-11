module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true, // makes sure the email is not used with other user
				vaildate: {
					isEmail: true
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				vaildate: {
					len: [7, 100]
				}
			}
		}, {
			hooks: {
				beforeValidate: function(user, options) {
					if (typeof user.email === 'string') {
						user.email = user.email.toLowerCase()
					}
				}
			}
		}
	)
};