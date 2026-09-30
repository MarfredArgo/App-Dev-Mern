import StudentCard from "../components/Card";
 
function Students({ students }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Student Lists!</h1>
      <div className="flex flex-wrap justify-center">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
 
export default Students;
