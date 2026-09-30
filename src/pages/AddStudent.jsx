import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const COURSE_OPTIONS = [
  { value: "BSIT", label: "BSIT - Bachelor of Science in Information Technology" },
  { value: "BSCS", label: "BSCS - Bachelor of Science in Computer Science" },
  { value: "BSIS", label: "BSIS - Bachelor of Science in Information Systems" },
];
const YEAR_OPTIONS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const SEX_OPTIONS = ["Male", "Female"];
 
function AddStudent({ onAddStudent }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "",
    course: COURSE_OPTIONS[0].value,
    year: YEAR_OPTIONS[0],
    sex: SEX_OPTIONS[0],
  });
 
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    const selectedCourse = COURSE_OPTIONS.find(
      (c) => c.value === formData.course
    );
 
    onAddStudent({
      name: formData.name,
      studentNumber: formData.studentNumber,
      course: selectedCourse.value,
      courseDescription: selectedCourse.label.split(" - ")[1],
      year: formData.year,
      sex: formData.sex,
    });
 
    navigate("/students");
  }
 
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Add Student</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4"
      >
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
 
        <div>
          <label className="block font-medium mb-1">Student Number</label>
          <input
            type="text"
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
 
        <div>
          <label className="block font-medium mb-1">Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            {COURSE_OPTIONS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
 
        <div>
          <label className="block font-medium mb-1">Year Level</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            {YEAR_OPTIONS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
 
        <div>
          <label className="block font-medium mb-1">Sex</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            {SEX_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
 
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
 
export default AddStudent;
