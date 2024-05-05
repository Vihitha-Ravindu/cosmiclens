[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/V1F4A3D5)
# CosmicLens Application

CosmicLens is a web application that allows users to explore the wonders of the cosmos, providing access to various NASA's galactic data, including Mars rover images, near-Earth objects, NASA images, and the Astronomy Picture of the Day (APOD).

## Application Setup

To set up the CosmicLens application locally, follow these steps:

1. Clone the repository from GitHub: `git clone https://github.com/sliitcsse/se3040-assignment02-Vihitha-Ravindu.git`
2. Navigate to the project directory: `cd CosmicLens`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`
5. Open your browser and visit http://localhost:3000 to view the application.

## Build Process

To build the CosmicLens application for production, execute the following command:
`npm run build`

This command generates an optimized production build in the build directory, ready for deployment.

## Usage Instructions

In order to enter to the application user must first log in or register to the application. Once the application is running, users can navigate through different sections using the navigation bar at the top. They can explore Mars rover images, near-Earth objects, NASA images, and the Astronomy Picture of the Day. Users can also register/login to access additional features such as saving favorite images or setting up notifications.

## Chosen APIs

### Mars Rover Photos API:
- Dataset: This API provides access to a collection of images captured by NASA's Mars rovers, including Curiosity, Opportunity, and Spirit. The images are categorized by the sol (Martian day) on which they were taken and the camera used to capture them.
- Demo URL - https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
- Challenges: One challenge faced with this API is its rate limit, which restricts the number of requests that can be made within a certain period. To overcome this limitation, we implemented a local cache system to store previously fetched data. This cache allows us to serve data quickly without exceeding the rate limit. Handling the dataset effectively was another challenge. The datasets returned by this API contain various metadata fields, such as image URLs, Earth dates, camera information, and rover details. We parse and display this information in an organized manner within the application. [[1]]

### Near Earth Object Web Service (NEOWS):
- Dataset: NEOWS provides data on near-Earth objects (NEOs), including their orbits, close approaches to Earth, and other relevant information. The dataset includes details such as object names, orbital parameters, estimated diameters, and dates of close approaches.
- Demo URL - https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-05-01&end_date=2023-05-08&api_key=DEMO_KEY
- Challenges: Similar to the Mars Rover Photos API, NEOWS also has a rate limit for API requests. To mitigate this issue, we implemented similar caching mechanisms to store and serve previously fetched data efficiently.

### NASA Image and Video Library API:
- Dataset: This API grants access to NASA's extensive collection of images, videos, and other multimedia content related to space exploration, astronomy, and scientific research. The dataset includes high-resolution images, videos, audio files, and other multimedia resources.
- Demo URL - https://images-api.nasa.gov/search?media_type=image&keywords=apollo&api_key=DEMO_KEY
- Challenges: The main challenge with this API is handling large volumes of multimedia data efficiently. To address this, we implemented strategies such as lazy loading and pagination to load and display content gradually, optimizing performance and user experience.

### Astronomy Picture of the Day (APOD) API:
- Dataset: The APOD API offers access to a curated collection of astronomy images and videos, along with accompanying descriptions written by professional astronomers. Each day, a new featured image or video is showcased, highlighting celestial phenomena, astronomical events, or captivating views of the universe.
- Demo URL - https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
- Challenges: One challenge encountered with the APOD API is its daily update cycle. Since the featured content changes every day, it's crucial to ensure that the application fetches and displays the latest APOD entry reliably. To address this, we implemented a mechanism to automatically retrieve and update the APOD data daily, ensuring that users always see the most current content. Also, the APOD dataset includes various metadata fields such as the date of the entry, the title, the image or video URL, and the accompanying explanation. We process and present this information in a visually appealing and informative manner within the application interface.

## Tailwind CSS

Tailwind CSS was used to style the CosmicLens application, providing a utility-first approach to building user interfaces. It offers a comprehensive set of pre-built components and utilities, allowing for rapid development and easy customization of styles.

## Testing

The CosmicLens application includes test files to ensure its functionality and reliability. We utilized the Jest framework for writing and running tests. To run the tests, execute the following command:
`npm test`

This command runs all the test suites and provides feedback on the application's functionality.

By addressing these challenges and leveraging appropriate technologies and strategies, the CosmicLens application was successfully developed to provide users with an immersive experience in exploring the cosmos.

