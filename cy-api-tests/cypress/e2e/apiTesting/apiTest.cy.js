import { fetchAuthApis } from '../../support/requests/apiRequests';

describe('API Test', () => {
  it('should find APIs with Authentication & Authorization category', () => {
    fetchAuthApis().then((authApis) => {
      console.log('Found APIs:', authApis);
      expect(authApis.length).to.be.greaterThan(0);
    });
  });
});
