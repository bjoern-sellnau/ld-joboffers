import { format } from 'date-fns';
import { v5 as uuidv5 } from 'uuid';

export const handleGetItemRequest = async (db, res, type, id, key = 'id') => {
  try {
    const data = await db(type)
      .find({ [key]: id })
      .value();

    if (data) {
      res.status(200).json(data);
    }
    res.status(404).end();
  } catch (e) {
    res.status(e.statusCode).end(e.message);
  } finally {
  }
};

export const handlePostItemRequest = async (db, res, type, data) => {
  const UPDATED_CREATED_TIMESTAMP = format(new Date(), 'yyyy-MM-dd');
  const UUID_NAMESPACE = 'https://loona-designs.tech/labs/joboffers';

  try {
    const _db = await db(type);
    const _db2 = _db.push({
      ...data,
      id: uuidv5(UUID_NAMESPACE, uuidv5.URL),
      addedAt: UPDATED_CREATED_TIMESTAMP,
      updatedAt: UPDATED_CREATED_TIMESTAMP
    });
    _db2.write();

    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(e.statusCode).end(e.message);
  } finally {
  }
};

export const handleGetItemsRequest = async (db, res, type) => {
  try {
    const data = await db(type)
      .read()
      .value();

    if (data) {
      res.status(200).json(data);
    }
    res.status(404).end();
  } catch (e) {
    res.status(e.statusCode).end(e.message);
  } finally {
  }
};
