import { fetchAuthApis } from '../../support/requests/apiRequests';

describe('API Test', () => {
  it('should find APIs with Authentication & Authorization category', () => {
    fetchAuthApis().then((authApis) => {
      cy.log('Found APIs:', authApis);
      expect(authApis.length).to.be.greaterThan(0);
      authApis.forEach((api) => {
        expect(api.Category).to.equal('Authentication & Authorization');
      });
    });
  });
});
