import { handleGetItemsRequest } from '../../../server/services/API';
import db from '../../../server/services/Database';

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      return handleGetItemsRequest(db, res, 'recruiters');
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
