const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  rating: { type: DataTypes.INTEGER },
  note: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
})

const Group = sequelize.define('group', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  group_name: { type: DataTypes.STRING },
  greeting: { type: DataTypes.STRING },
})

const UserGroup = sequelize.define('user_group', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.belongsToMany(Group, { through: UserGroup })
Group.belongsToMany(User, { through: UserGroup })

module.exports = { User, Group, UserGroup }
