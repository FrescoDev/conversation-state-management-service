import BaseHandler from 'fresco-http-service-utilities';

class MetaHandler extends BaseHandler {
  index(req, res) {
		res.json({
			description: 'conversation-state-management-service',
			health: 'ok'
		});
	}
}

export default new MetaHandler();