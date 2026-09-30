import { useParams, Link } from "react-router-dom";
 
function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));
 
  if (!student) {
    return <p className="text-center mt-10">Student not found.</p>;
  }
 
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">{student.name}</h1>
      <p><strong>Student Number:</strong> {student.studentNumber}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Course Description:</strong> {student.courseDescription}</p>
      <p><strong>Year:</strong> {student.year}</p>
      <p><strong>Sex:</strong> {student.sex}</p>
      <Link
        to="/students"
        className="inline-block mt-5 text-blue-600 hover:underline"
      >
        &larr; Back to Student List
      </Link>
    </div>
  );
}
 
export default StudentDetails;
