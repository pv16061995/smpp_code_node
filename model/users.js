const db = require('../config/config');
const Sequelize = require('sequelize');

const blogs = db.define('users',
    {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING, defaultValue: "" },
        username: { type: Sequelize.STRING, defaultValue: "" },
        password: { type: Sequelize.STRING, defaultValue: "" },
        tfa_pin: { type: Sequelize.STRING, defaultValue: "" },
        email: { type: Sequelize.STRING, defaultValue: "" },
        timestamp:  {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          } ,
        mobile: { type: Sequelize.STRING, defaultValue: "" },
        is_allow_ip: { type: Sequelize.INTEGER, defaultValue: "0" },
        allow_ip: { type: Sequelize.STRING, defaultValue: "" },
        is_tfa: { type: Sequelize.STRING, defaultValue: "" },
        tfa_no: { type: Sequelize.STRING, defaultValue: "" },
        account_validity: { type: Sequelize.STRING, defaultValue: "" },
        zip: { type: Sequelize.STRING, defaultValue: "" },
        lat: { type: Sequelize.STRING, defaultValue: "" },
        lon: { type: Sequelize.STRING, defaultValue: "" },
        currency: { type: Sequelize.STRING, defaultValue: "" },
        timezone: { type: Sequelize.STRING, defaultValue: "" },
        user_agent: { type: Sequelize.STRING, defaultValue: "" },
        account: { type: Sequelize.STRING, defaultValue: "" }
    }, { timestamps: false }
);

module.exports = blogs;