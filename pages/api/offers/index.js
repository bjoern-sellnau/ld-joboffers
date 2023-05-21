import {
  handleGetItemsRequest,
  handlePostItemRequest
} from '../../../server/services/API';
import db from '../../../server/services/Database';

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      return handleGetItemsRequest(db, res, 'offers');
    case 'POST':
      return handlePostItemRequest(db, res, 'offers', req.body);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
