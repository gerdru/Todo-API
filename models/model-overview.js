var bcrypt = require('bcrypt');
var _ = require('underscore');

module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		'user',
		{
			email: {data...},
			salt: {},
			password_hash: {},
			password: {},
			set: function(value) {...}
		},
		{
			hooks: {},
			classMethods: {
				authenticate: function(){}
			},
			instanceMethods: {
				toPublicJSON: function() {}
			}
		}
	)
};