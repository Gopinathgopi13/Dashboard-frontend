// src/pages/detailedViews/TeacherDetailView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherDetailView = ({ match }) => {
  const [teacher, setTeacher] = useState({});

  useEffect(() => {
    const teacherId = match.params.teacherId;
    axios.get(`/api/teachers/${teacherId}`).then((response) => {
      setTeacher(response.data);
    });
  }, [match.params.teacherId]);

  return (
    <div>
      <h2>Teacher Details</h2>
      <p>Name: {teacher.name}</p>
      <p>ID: {teacher.id}</p>
      {/* Add more details */}
    </div>
  );
};

export default TeacherDetailView;
