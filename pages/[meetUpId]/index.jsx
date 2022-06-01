import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/c/c2/001_Jundia%C3%AD.jpg"
      title="A First Meetup"
      address="Some City 5, Some Street"
      description="A meetup"
    />
  );
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c2/001_Jundia%C3%AD.jpg",
        title: "A First Meetup",
        address: "Some City 5, Some Street",
        description: "A meetup",
      },
    },
  };
};

export default MeetupDetails;
