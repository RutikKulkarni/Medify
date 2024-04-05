# Medify

Welcome to Medify, a React-based web application designed for booking medical appointments. This project aims to provide users with a seamless experience in finding medical centers across the USA and scheduling appointments. It includes features such as searching for medical centers by state and city, booking appointments, and viewing past bookings.

## Live Demo

- *Live URL:* [here](https://medify-one.vercel.app/). 

## Objective

The objective of this assignment is to build a fully functional web application that facilitates the booking of medical appointments. Users should be able to:

- Navigate through the platform sections like Find Doctors, Hospitals, Medicines, and more via a top navigation bar.
- Search for medical centers by selecting a state and city.
- View available medical centers in the selected location and book appointments.
- Use a detailed booking section with a calendar-like interface to choose appointment dates and time slots.
- Access a personalized page displaying all user bookings.

## Key Features to Implement

### Landing Page

- Top navigation bar with access to platform sections.
- Search section for selecting a state and city.
- Additional sections as provided in the Figma design.

### Search Results Page

- Listings view showing available medical centers.
- Option to book appointments.

### Booking Interface

- Detailed booking section for selecting a medical center.
- Calendar-like interface for choosing appointment dates.
- Ability to book appointments within a time frame.

### My Bookings Page

- Personalized page displaying all user bookings.

### Responsive Design

- Ensure full responsiveness adhering to design standards presented in Figma screenshots.

## Figma Design

[Figma Link](https://www.figma.com/file/BLZw4DOia4hXyqt8X1Yuyl/Desktop-Designs-%3A-Healthcare-Consultation-(Community)?type=design&node-id=0-1&mode=design&t=VgPv59eyp8F6dTev-0)

## Backend Endpoint

- **Base URL:** [https://meddata-backend.onrender.com](https://meddata-backend.onrender.com)
- **Endpoints:**
  - Get a list of all states: `/states`
  - Get a list of all cities of a particular state: `/cities/:state`
    Eg: `/cities/Alaska`
  - Get a list of all medical centers based on a state and city: `/data?state=<state-name>&city=<city-name>`
    Eg: `/data?state=Alaska&city=SOLDOTNA`

## Sample JSON Response
- *Request:* https://meddata-backend.onrender.com/data?state=Alaska&city=SOLDOTNA
```
{
    Provider ID: "020024",
    Hospital Name: "CENTRAL PENINSULA GENERAL HOSPITAL",
    Address: "250 HOSPITAL PLACE",
    City: "SOLDOTNA",
    State: "Alaska",
    ZIP Code: 99669,
    County Name: "",
    Phone Number: 9072624404,
    Hospital Type: "Acute Care Hospitals",
    Hospital Ownership: "Voluntary non-profit - Other",
    Emergency Services: "Yes",
    Meets criteria for meaningful use of EHRs: "Y",
    Hospital overall rating: 3,
    Hospital overall rating footnote: "",
    Mortality national comparison: "Same as the national average",
    Mortality national comparison footnote: "",
    Safety of care national comparison: "Same as the national average",
    Safety of care national comparison footnote: "",
    Readmission national comparison: "Same as the national average",
    Readmission national comparison footnote: "",
    Patient experience national comparison: "Same as the national average",
    Patient experience national comparison footnote: "",
    Effectiveness of care national comparison: "Same as the national average",
    Effectiveness of care national comparison footnote: "",
    Timeliness of care national comparison: "Below the national average",
    Timeliness of care national comparison footnote: "",
    Efficient use of medical imaging national comparison: "Same as the national average",
    Efficient use of medical imaging national comparison footnote: ""
}
```

