import { Link } from "react-router-dom";

function Card({ student }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow p-4 m-3 w-72">
      <p className="font-semibold">Fullname: {student.name}</p>
      <p>Student Number: {student.studentNumber}</p>
      <p>Course: {student.course}</p>
      <p>Course Description: {student.courseDescription}</p>
      <Link
        to={`/students/${student.id}`}
        className="inline-block mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View full details
      </Link>
    </div>
  );
}
 
export default Card;
