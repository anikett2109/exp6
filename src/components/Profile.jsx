import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileHeader = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;

const ProfileText = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  color: #444;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
  border: 5px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Education = styled.div`
  font-size: 20px;
  color: #555;
  margin-top: 20px;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileHeader> Aniket</ProfileHeader>
      <ProfileImage src="km.jpg" alt="aniket" />
      <ProfileText>Student</ProfileText>
      <Education>
        <h3>Education</h3>
        <ProfileText>B.E. Information Technology</ProfileText>
        <ProfileText>CGPA: 5</ProfileText>
        <ProfileText>VESIT</ProfileText>
      </Education>
    </ProfileContainer>
  );
};

export default Profile;
