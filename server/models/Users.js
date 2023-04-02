module.exports = ( sequelize, DataType ) => {
    const Users = sequelize.define("Users", {
        fullName: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
        },
    });
    return Users;
};