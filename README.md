# Experiential Travel Marketplace 

<h1 align="center" id="title">Vicinity</h1>

<p id="description">Vicinity is a platform that connects travelers and tourists with locals offering unique immersive experiences in their respective regions. From living with traditional families to attending skill-based workshops and guided shopping excursions this marketplace aims to provide an authentic and enriching travel experience.</p>

<p align="center"><img src="https://img.shields.io/badge/Next.js-43853D?style&amp;logo=next.js&amp;logoColor=white" alt="shields"> <img src="https://img.shields.io/badge/Redux%20Toolkit-RTK-orange.svg" alt="shields"> <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style&amp;logo=postgresql&amp;logoColor=white" alt="PostgreSQL"> <img src="https://img.shields.io/badge/CockroachDB-634C5A?style&amp;logo=cockroachdb&amp;logoColor=white" alt="CockroachDB"> <img src="https://img.shields.io/badge/Docker-2496ED?style&amp;logo=docker&amp;logoColor=white" alt="shields"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style&amp;logo=amazon-ec2&amp;logoColor=white" alt="shields"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style&amp;logo=typescript&amp;logoColor=white" alt="TypeScript"></p>
  
<h2>Features</h2>

Here're some of the project's best features:

*   **Immersive Experiences**: Travelers can book a wide range of experiences offered by locals including homestays workshops guided tours and more. These experiences are designed to provide an authentic and culturally enriching journey fostering cross-cultural understanding and appreciation.
*   **Preservation of Cultural Heritage**: The platform serves as a means to preserve and promote endangered cultures and traditions. By connecting travelers with local communities these unique experiences receive much-needed exposure and support ensuring their continued survival and transmission to future generations.
*   **Sustainable Tourism**: Experiential Travel Marketplace promotes sustainable and responsible tourism practices. Experiences are curated to minimize environmental impact while maximizing positive economic and social effects on local communities.
*   **Community Empowerment**: The platform empowers local communities by providing them with a platform to showcase and monetize their cultural offerings. This not only generates income opportunities but also instills a sense of pride and appreciation for their heritage.
*   **Personalized Travel Planning**: Travelers can create customized itineraries by combining various experiences based on their interests preferences and travel dates. The platform's search and filtering capabilities make it easy to find the perfect experiences.
*   **User Reviews and Ratings***: Travelers can leave reviews and ratings for the experiences they've attended enabling others to make informed decisions and fostering a transparent and trustworthy community.
*   **Local Guides and Experts**: Many experiences are led by local guides and experts who possess intimate knowledge of the region's history traditions and customs providing travelers with invaluable insights and context.
*   **Virtual Experiences**: For those unable to travel physically the platform offers virtual experiences such as online workshops cultural demonstrations and live-streamed events bridging the gap between cultures and making these experiences accessible to a global audience.

<h2>🐹 GoLang Setup:</h2>
*  The application backend is implemented in GoLang. We chose GoLang over Express and other languages due to its performance, concurrency support, and simplicity.
* Our GoLang backend utilizes Prisma as an ORM with CockroachDB as the database.
* To set up the GoLang backend code, located in the backend folder of the repository, you need to configure it with a database URL. This URL should point to a PostgreSQL cloud instance that supports Prisma, such as Neon, CockroachDB, ElephantSQL, etc.
* Currently, our GoLang backend routes can be accessed at: [http://ec2-35-154-46-106.ap-south-1.compute.amazonaws.com:4000](http://ec2-35-154-46-106.ap-south-1.compute.amazonaws.com:4000)

<h2>Amazon S3 Setup</h2>
* For image storage and retrieval, we are using Amazon S3.
* Setting up the necessary IAM roles.
* Setting up the necessary environment variables in the `.env.example` file.
* Currently, our Amazon S3 backend can be accessed at: [http://ec2-13-126-223-141.ap-south-1.compute.amazonaws.com:4000](http://ec2-13-126-223-141.ap-south-1.compute.amazonaws.com:4000)


<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository:</p>

```
https://github.com/Wittyhacks4CR006/WH055_MindNotWorking
```

<p>2. Navigate to the project root directory:</p>

<p>3. Install dependencies:</p>

```
npm install --global yarn
```

```
yarn install
```

<p>4. Start the development server:</p>

```
yarn run dev
```

<h2>🍰 Contribution Guidelines:</h2>

We welcome contributions to enhance the Experiential Travel Marketplace! If you'd like to contribute please follow these steps: Fork the repository. Create a new branch for your feature or bug fix. Make your changes and commit them with descriptive commit messages. Push your changes to your forked repository. Open a pull request against the main repository describing your changes in detail.

## Contributing

We welcome contributions to enhance the Experiential Travel Marketplace! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Open a pull request against the main repository, describing your changes in detail.

Please ensure that your code adheres to the project's coding standards and includes appropriate tests.


