# Vicinity - An Experiential Travel Marketplace 

## Introduction

Experiential Travel Marketplace is a platform that connects travelers and tourists with locals offering unique, immersive experiences in their respective regions. From living with traditional families to attending skill-based workshops and guided shopping excursions, this marketplace aims to provide an authentic and enriching travel experience.

## Features

- **Host Services**: Locals can list their homes or accommodations, offering travelers the opportunity to experience traditional lifestyles and cultural immersion.
- **Workshops and Classes**: Travelers can book classes or workshops conducted by locals, learning traditional skills such as pottery, cooking, or handicrafts.
- **Guided Shopping**: Locals can lead guided shopping tours, introducing travelers to exotic materials, products, and markets unique to their region.
- **User Profiles**: Both travelers and locals can create profiles, showcasing their interests, preferences, and offerings.
- **Search and Filtering**: Travelers can search for and filter experiences based on location, category, price range, and availability.
- **Secure Payments**: Integrated payment processing for seamless and secure transactions.

## Getting Started (For Contributors)

To get a local copy of the project up and running, follow these steps:

## Prerequisites

- Node.js (version 14 or later)
- npm (bundled with Node.js)
- CockroachDB (or any compatible database)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/experiential-travel-marketplace.git
```

2. Navigate to the project directory:

```bash
cd experiential-travel-marketplace
```

3. Install dependencies:

```bash
npm install
```

4. Set up the environment variables:

```bash
cp .env.example .env
```

Update the `.env` file with your database credentials and other necessary configurations.

5. Start the development server:

```bash
npm run dev
```

The application should now be running at `http://localhost:3000`.

## Tech Stack

- **Frontend**: Next.js 14
- **State Management**: Redux
- **Database**: CockroachDB

## Contributing

We welcome contributions to enhance the Experiential Travel Marketplace! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Open a pull request against the main repository, describing your changes in detail.

Please ensure that your code adheres to the project's coding standards and includes appropriate tests.
