export const fetchAuthApis = () => {
  return cy.request('https://api.publicapis.org/entries').then((response) => {
    return response.body.entries.filter(entry => entry.Category === 'Authentication & Authorization');
  });
};