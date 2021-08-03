High Level:

Write user stories based off of feature requests and designs
Test Drive a connected CRUD React app using the relevant testing libraries (UI tests: Cypress, Unit tests/mocks: Jest)
All code is produced through TDD with a pair
UI tests are performed using Cypress
All functionality of the application is developed using component based architecture in React
All persistent data is received and processed through network requests to the back end service
The application is structured to consume data according to the structure provided by the back end service
create your own user stories and work flow.
Features: Browse movies anonymously Look at a specific movie with details and reviews Search movies Post a review on a movie Register a new user

User Stories:
[] As an anonymous user I want to be able to browse all available movies
[] As an anonymous user I want to be able to look at a specficy moview with the details and review
[] As an anonymous user I want to be able to search all available movies
[] As an anonymous user I want to be able to create and account
[] As an anonymous user I want to be able to post a review on a movie

Design:
[] Header Component (contains links and search form)
[] Search Component
[] Make API call to /movies?search
[] DataCache Component
[] Recieves query from search or movies
[] Loads data and passes down as prop to movies
[] App Comonent
[] Contain List of current movies in state
[] pass down current list of movies as needed
[] Will be router of components
[] / Movies Component (lists out all available movies) -- Displays all movies in API or those filtered from the search query
[] Make API call to /movies [] Display all movies
[] /movie/:id Movie Component (list one movie per page)
[] Parse ID from router
[] Movie Data
[] Make API to /movie/id
[] List Reviews
[] Make API call to /reviews/id
[] List out reviews
[] Submit Reviews
[] Submit Review Form
[] Make a Post API call to /reviews
[] Trigger refresh of reviews list
[] /login Login Component
[] Login Form
[] Make API call to /register
[] After good register push to movies page

