import { createMocks } from 'node-mocks-http'
import getJobs from '../pages/api/jobs'
import JSONData from '../data/jobs.json'

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

describe('/api/jobs', () => {
  it('returns a json object containing jobs data', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });
    await getJobs(req, res);
    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual({ jobs: JSONData })
  });
});