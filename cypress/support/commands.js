// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('fetchYears', (url) => {
  cy.intercept('GET', url, {
    statusCode: 201,
    body: {
      success: true,
      total_entries: 1,
      total_pages: 1,
      page: 1,
      data: [
        '2021',
        '2020',
        '2019',
        '2018',
        '2017',
        '2016',
        '2015',
        '2014',
        '2013',
        '2012',
        '2011',
        '2010',
        '2009',
        '2004',
        '2003',
        '2002',
        '2000',
        '1999',
        '1998',
        '1997',
        '1996',
        '1995',
        '1994',
        '1993',
        '1992',
        '1991',
        '1990',
        '1989',
        '1988',
        '1983-1987',
      ],
    },
  });
});

//  SHOW DISPLAY COMMANDS
Cypress.Commands.add('fetch2019Shows', () => {
  cy.intercept('GET', 'http://phish.in/api/v1/years/2019', {
    statusCode: 200,
    body: {
      data: [
        {
          date: '2019/02/28',
          duration: 9658254,
          id: 1,
          incomplete: false,
          likes_count: 5,
          remastered: false,
          sbd: false,
          tags: [],
          taper_notes:
            'PhishnBarcelo Maya Grand ResortnRiviera Maya, Quintana Roo, Mexicon02/21/2019nnSource',
          tour_id: 106,
          tracks: ['test', 'test', 'test', 'test'],
          updated_at: '2019-02-28T02:58:30Z',
          venue: {
            id: 817,
            slug: 'barcelo-maya-beach',
            name: 'name',
            location: 'TEST LOCATION 1',
          },
          other_names: [{ latitude: 20.631389 }],
          venue_name: 'TEST NAME 1',
        },
        {
          date: '2019/02/21',
          duration: 9658254,
          id: 2,
          incomplete: false,
          likes_count: 5,
          remastered: false,
          sbd: false,
          tags: [],
          taper_notes:
            'Phish\nBarcelo Maya Grand Resort\nRiviera Maya, Quintana Roo, Mexico\n02/21/2019\n\nSource ...',
          tour_id: 106,
          tracks: ['test', 'test', 'test', 'test'],
          updated_at: '2019-02-28T02:58:30Z',
          venue: {
            id: 817,
            slug: 'barcelo-maya-beach',
            name: 'name2',
            location: 'TEST LOCATION 2',
          },
          other_names: [{ latitude: 20.631389 }],
          venue_name: 'TEST NAME 2',
        },
      ],
    },
  });
});

Cypress.Commands.add('fetch2020Shows', () => {
  cy.intercept('GET', 'http://phish.in/api/v1/years/2020', {
    statusCode: 200,
    body: {
      data: [
        {
          date: '2020/03/15',
          duration: 9658254,
          id: 3,
          incomplete: false,
          likes_count: 5,
          remastered: false,
          sbd: false,
          tags: [],
          taper_notes:
            'PhishnBarcelo Maya Grand ResortnRiviera Maya, Quintana Roo, Mexicon02/21/2019nnSource',
          tour_id: 106,
          tracks: ['test', 'test', 'test', 'test'],
          updated_at: '2019-02-28T02:58:30Z',
          venue: {
            id: 817,
            slug: 'barcelo-maya-beach',
            name: 'name',
            location: 'TEST LOCATION 1 FOR 2020',
          },
          other_names: [{ latitude: 20.631389 }],
          venue_name: 'TEST NAME 1 FOR 2020',
        },
        {
          date: 'DATE TEST 2 FOR 2020',
          duration: 9658254,
          id: 4,
          incomplete: false,
          likes_count: 5,
          remastered: false,
          sbd: false,
          tags: [],
          taper_notes:
            'Phish\nBarcelo Maya Grand Resort\nRiviera Maya, Quintana Roo, Mexico\n02/21/2019\n\nSource ...',
          tour_id: 106,
          tracks: ['test', 'test', 'test', 'test'],
          updated_at: '2019-02-28T02:58:30Z',
          venue: {
            id: 817,
            slug: 'barcelo-maya-beach',
            name: 'name2',
            location: 'TEST LOCATION 2 FOR 2020',
          },
          other_names: [{ latitude: 20.631389 }],
          venue_name: 'TEST NAME 2 FOR 2020',
        },
      ],
    },
  });
});

Cypress.Commands.add('fetchShowData', () => {
  cy.intercept('GET', 'http://phish.in/api/v1/shows/2', {
    statusCode: 200,
    body: {
      data: {
        date: '2019/02/21',
        duration: 9658254,
        id: 2,
        incomplete: false,
        likes_count: 5,
        remastered: false,
        sbd: false,
        tags: [],
        taper_notes:
          'Phish\nBarcelo Maya Grand Resort\nRiviera Maya, Quintana Roo, Mexico\n02/21/2019\n\nSource ...',
        tour_id: 106,
        tracks: ['test', 'test', 'test', 'test'],
        updated_at: '2019-02-28T02:58:30Z',
        venue: {
          id: 817,
          slug: 'barcelo-maya-beach',
          name: 'name2',
          location: 'TEST LOCATION 2',
        },
        other_names: [{ latitude: 20.631389 }],
        venue_name: 'TEST NAME 2',
      },
    },
  });
});

Cypress.Commands.add('fetchShow', () => {
  cy.intercept('GET', 'http://phish.in/api/v1/shows/4', {
    statusCode: 200,
    body: {
      data: {
        date: '2019/02/21',
        duration: 9658254,
        id: 4,
        incomplete: false,
        likes_count: 5,
        remastered: false,
        sbd: false,
        tags: [],
        taper_notes:
          'Phish\nBarcelo Maya Grand Resort\nRiviera Maya, Quintana Roo, Mexico\n02/21/2019\n\nSource ...',
        tour_id: 106,
        tracks: [
          {
            id: 34867,
            set_name: 'Set 1',
            title: 'Glide',
            mp3: 'https://phish.in/audio/000/033/499/33499.mp3',
          },
          {
            id: 33501,
            set_name: 'Set 2',
            title: 'Free',
            mp3: 'https://phish.in/audio/000/033/501/33501.mp3',
          },
        ],
        updated_at: '2019-02-28T02:58:30Z',
        venue: {
          id: 817,
          slug: 'barcelo-maya-beach',
          name: 'name2',
          location: 'TEST LOCATION 4',
        },
        other_names: [{ latitude: 20.631389 }],
        venue_name: 'TEST NAME 4',
      },
    },
  });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
