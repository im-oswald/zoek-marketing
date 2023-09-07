const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { leadService } = require('../services');


const createLead = catchAsync(async (req, res) => {
	const lead = await leadService.createLead(req);

	if (!lead) {
		throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Lead could not be created');
	}

	res.send({ lead });
});

const getLeads = catchAsync(async (req, res) => {
	const leads = await leadService.getLeads(req);
	res.send({ leads });
});

module.exports = {
createLead,
getLeads
};
