const httpStatus = require('http-status');
const { getOffset } = require('../utils/query');
const ApiError = require('../utils/ApiError');
const { encryptData } = require('../utils/auth');
const config = require('../config/config.js');
const db = require('../db/models');
const userService = require('./user.service')


async function createLead(req) {
	const { email, name, phone } = req.body;

	const createdLead = await db.lead
		.create({
			name,
			email,
			phone,
		})
		.then((resultEntity) => resultEntity.get({ plain: true }));

	return createdLead;
}

async function getLeads(req) {
	const { page: defaultPage, limit: defaultLimit } = config.pagination;
	const { page = defaultPage, limit = defaultLimit } = req.query;

	const offset = getOffset(page, limit);

	const leads = await db.lead.findAndCountAll({
		order: [
			['name', 'ASC'],
			['created_date_time', 'DESC'],
			['modified_date_time', 'DESC'],
		],
		limit,
		offset,
		raw: true,
	});

	return leads;
}

module.exports = {
	createLead,
  getLeads
};
