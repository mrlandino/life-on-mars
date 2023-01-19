describe('Home Page', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-13', {fixture: 'image6'}).as('image6')
  })

  it('should load a nav bar with a title that navigates to the home page and 2 buttons that navigate to their respective pages ', () => {
    cy.get('nav').find('a').contains('SpaceCal')
    cy.get('nav').find('a').contains('Images').click()
    cy.url().should('include', '/Images')
    cy.get('nav').find('a').contains('SpaceCal').click()
    cy.url().should('include', '/')
    cy.get('nav').find('a').contains('Calendar').click()
    cy.url().should('include', '/Calendar')
    cy.get('nav').find('a').contains('SpaceCal').click()
    cy.url().should('include', '/')
  })

  it('should load an application title', () => {
    cy.get('main').find('h1').contains('Welcome to')
    cy.get('main').find('h2').contains('SpaceCal')
  })

  it('should have 3 bullet points to describe the app', () => {
    cy.get('main').find('span').contains('Build your own unique calendar from images in the NASA database')
    cy.get('main').find('span').contains('Choose your favorite images to add to your calendar')
    cy.get('main').find('span').contains('Great 10 x 8 inch size for the office, at home, or even a gift')
  })

  it('should load an image that shows the calendars', () => {
    cy.get('main').find('img').should('have.attr', 'src').should('include', 'Space_Calendars_2023')
  })

  it('should have a button that takes you to the next page', () => {
    cy.get('main').find('a').contains('Begin Design').click()
    cy.url().should('include', '/Images')
  })
})

describe('Images Page to Calendar Page and Order', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/Images')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-18', {fixture: 'image1'}).as('image1')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-17', {fixture: 'image2'}).as('image2')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-16', {fixture: 'image3'}).as('image3')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-15', {fixture: 'image4'}).as('image4')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-14', {fixture: 'image5'}).as('image5')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-13', {fixture: 'image6'}).as('image6')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-12', {fixture: 'image7'}).as('image7')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-11', {fixture: 'image8'}).as('image8')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-09', {fixture: 'image9'}).as('image9')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-08', {fixture: 'image10'}).as('image10')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-07', {fixture: 'image11'}).as('image11')
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=2022-01-04', {fixture: 'image12'}).as('image12')
  })

  it('should load a nav bar with a title that navigates to the home page and 2 buttons that navigate to their respective pages ', () => {
    cy.get('nav').find('a').contains('SpaceCal')
    cy.get('nav').find('a').contains('Images').click()
    cy.url().should('include', '/Images')
    cy.get('nav').find('a').contains('SpaceCal').click()
    cy.url().should('include', '/')
    cy.get('nav').find('a').contains('Calendar').click()
    cy.url().should('include', '/Calendar')
    cy.get('nav').find('a').contains('SpaceCal').click()
    cy.url().should('include', '/')
  })

  it('should load a page title', () => {
    cy.get('main').find('h1').contains('Search')
    cy.get('main').find('h2').contains('Images')
  })

  it('should have description of the page', () => {
    cy.get('main').find('p').contains('NASA has a database of images that they have collected since 1995! They post a "photo of the day" everyday and will continue to do so for the foreseeable future. This search function allows you to see what the "photo of the day" was on the date that you chose. After you find an image you like, you can add it to your list of photos to be displayed on your calendar. Once you have chosen 12 images you can generate your calendar and move to the next page to finalize your purchase.')
  })

  it('should have a date picker to search images', () => {
    cy.get('main').find('input').should('have.attr', 'type', 'date')
  })

  it('should have a button that you press to search images', () => {
    cy.get('main').find('button').contains('Search')
  })

  it('should load an image that shows a photo of the day with a title and description underneath', () => {
    cy.get('main').find('img').should('have.attr', 'src', 'https://apod.nasa.gov/apod/image/2201/HOOClassicBinned_ps1024.jpg')
    cy.get('main').find('div').contains('Supernova Remnant Simeis 147')
    cy.get('main').find('div').contains("It's easy to get lost following the intricate, looping, twisting filaments in this detailed image of supernova remnant Simeis 147. Also cataloged as Sharpless 2-240 it goes by the popular nickname, the Spaghetti Nebula. Seen toward the boundary of the constellations Taurus and Auriga, it covers nearly 3 degrees or 6 full moons on the sky. That's about 150 light-years at the stellar debris cloud's estimated distance of 3,000 light-years. This composite includes image data taken through narrow-band filters where reddish emission from ionized hydrogen atoms and doubly ionized oxygen atoms in faint blue-green hues trace the shocked, glowing gas. The supernova remnant has an estimated age of about 40,000 years, meaning light from the massive stellar explosion first reached Earth 40,000 years ago. But the expanding remnant is not the only aftermath. The cosmic catastrophe also left behind a spinning neutron star or pulsar, all that remains of the original star's core.")
  })

  it('should have a button at the bottom to allow the user to add image to their calendar', () => {
    cy.get('main').find('input').click().type('2022-01-18')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('img').should('have.attr', 'src', 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_1080.jpg')
    cy.get('main').find('div').contains('From Orion to the Southern Cross')
    cy.get('main').find('div').contains("This is a sky filled with glowing icons. On the far left is the familiar constellation of Orion, divided by its iconic three-aligned belt stars and featuring the famous Orion Nebula, both partly encircled by Barnard's Loop. Just left of center in the featured image is the brightest star in the night: Sirius. Arching across the image center is the central band of our Milky Way Galaxy. On the far right, near the top, are the two brightest satellite galaxies of the Milky Way: the Large Magellanic Cloud (LMC), and the Small Magellanic Cloud (SMC). Also on the far right -- just above the cloudy horizon -- is the constellation of Crux, complete with the four stars that make the iconic Southern Cross. The featured image is a composite of 18 consecutive exposures taken by the same camera and from the same location in eastern Australia during the last days of last year. In the foreground, picturesque basalt columns of the Bombo Quarry part to reveal the vast Pacific Ocean.")
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('h4').contains('Images for your Calendar')
    cy.get('main').find('div').should('have.class','MuiCardContent-root css-17c8tvj-MuiCardContent-root').find('p', '1')
    cy.get('main').find('div').should('have.class','MuiCardContent-root css-17c8tvj-MuiCardContent-root').find('button', 'Remove')
    cy.get('main').find('div').should('have.class','MuiCardContent-root css-17c8tvj-MuiCardContent-root').find('div', 'role', 'img')
  })

  it('should have a generate calendar button appear when you select 12 images', () => {
    cy.get('main').find('input').click().type('2022-01-18')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-17')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-16')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-15')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-14')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-13')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-12')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-11')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-09')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-08')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-07')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('input').click().type('2022-01-04')
    cy.get('main').find('button').contains('Search').click()
    cy.get('main').find('button').contains('Add image to Calendar').click()

    cy.get('main').find('a').contains('Generate Calendar').click()
    cy.url().should('include', '/Calendar')

    cy.get('main').find('button').contains('Add to Cart').click()
    cy.get('div').find('a').contains('Order').click()
    
  })
})

describe('Calendar Page when empty', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/Calendar')
  })

  it('should load a nav bar with a title that navigates to the home page and 2 buttons that navigate to their respective pages ', () => {
    cy.get('nav').find('a').contains('SpaceCal')
    cy.get('nav').find('a').contains('Images').click()
    cy.url().should('include', '/Images')
    cy.get('nav').find('a').contains('SpaceCal').click()
    cy.url().should('include', '/')
    cy.get('nav').find('a').contains('Calendar').click()
    cy.url().should('include', '/Calendar')
    cy.get('nav').find('a').contains('SpaceCal').click()
    cy.url().should('include', '/')
  })

  it('should load a page title', () => {
    cy.get('main').find('h1').contains('Your')
    cy.get('main').find('h2').contains('Calendar')
  })

  it('should have description of the page', () => {
    cy.get('main').find('p').contains(`Welcome to your final calendar layout! This is how your calendar will be printed in the order you chose your images. You can click on 'see enlarged' to see a bigger visual of the image you click on. If you don't like a certain image, you can return to the IMAGES page to remove and add another image to your lineup. When you are happy with your images you have chosen click the "Add to Cart" button for purchase. Note images are cropped to fit the aspect ratio of the final calendar.`)
  })

  it('should have description of the page', () => {
  cy.get('main').find('h4').contains('Your custom calendar is currently empty. Please return to the images page to fill your calendar.')
  })
})
