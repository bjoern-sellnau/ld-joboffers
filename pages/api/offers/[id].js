import { handleGetItemRequest } from '../../../server/services/API';
import db from '../../../server/services/Database';

export default async (req, res) => {
  const {
    query: { id }
  } = req;

  switch (req.method) {
    case 'GET':
      return handleGetItemRequest(db, res, 'offers', parseInt(id), 'id');
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
