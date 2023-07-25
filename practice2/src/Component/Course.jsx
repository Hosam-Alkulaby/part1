/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Course = (props) => {
  const { courses } = props;

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          {course.parts.map((part) => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          ))}
          <h4>
            Total exercises:{" "}
            {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Course;
