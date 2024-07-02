
# FlyPoint  - Delivery Management System

ParcelPro is a web application designed to manage parcel deliveries efficiently. This system allows users to book parcels, track delivery statuses, and manage delivery personnel. The project integrates various modern web technologies including React, DaisyUI, React Leaflet, and ExpressJS, with MongoDB as the database.

## Live Site

https://fly-point-53b64.web.app

## Login Details

- **Admin Email**: rafi2@gmail.com
- **Admin Password**: 258258
- **Delivery Man Email**: chatushkonbookshop@gmail.com
- **Delivery Password**: 258258

## Features

- **User Authentication**: Secure user login and registration.
- **Parcel Booking**: Users can book parcels for delivery.
- **Delivery Tracking**: Track the status of parcels from booking to delivery.
- **Review System**: Users can rate and review delivery personnel.
- **Admin Dashboard**: Manage users, parcels, and delivery personnel.
- **Interactive Maps**: Display delivery locations using React Leaflet.

## Technologies Used

- **Frontend**: React, DaisyUI, TailwindCSS, React Leaflet, React Query (TanStack Query), daisyUI
- **Backend**: ExpressJS, Node.js
- **Database**: MongoDB Atlas
- **Others**: SweetAlert2 for alerts, Axios for HTTP requests, Firebase Auth, Firebase Hosting

## Installation

1. Clone the repository:

```bash
git clone https://github.com/abdullahrafi1234/flyPoint-client.git
```

2. Install dependencies:
```bash
cd project name
npm install
```

3. Create a .env.local file in the root directory and add your Firebase config keys and other details:

```env
VITE_APIKEY=your-firebase-api-key
VITE_AUTHDOMAIN=your-firebase-auth-domain
VITE_PROJECTID=your-firebase-project-id
VITE_STORAGEBUCKET=your-firebase-storage-bucket
VITE_MESSAGINGSENDERID=your-firebase-messaging-sender-id
VITE_APPID=your-firebase-app-id
VITE_IMAGE_HOSTING_KEY=imgbb-image-hosting-key
VITE_PAYMENT_GATEWAY_PK=stripe-public-key
```

4. Start the development server:
 ```bash
npm run dev
```

5. Visit http://localhost:5000 in your browser to view the application.
