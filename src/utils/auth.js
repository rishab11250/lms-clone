export const students = [
    {
        uid: "1001",
        password: "123",
        name: "Rishab Chandgothia",
        email: "rishab11250@gmail.com",
        mobile: "8469190331",
        University: "SUxCG 714",
        image: "https://avatars.githubusercontent.com/u/224525950?v=4",
        attendance: {
            semester: "semester 2",
            present: 141,
            total: 151,
            bonus: 0,
            percentLabel: 93,
            startDate: "29/01/2026",
            endDate: "30/06/2026",
        },
        subjects: [
            "SU11 - GIT & GITHUB",
            "SU12 - C Language",
            "SU13 - HTML/CSS/JS",
            "SU14 - UI/UX Figma",
            "SU15 - Maths",
            "SU16 - JavaScript",
            "SU0201 - ReactJS",
            "SU0202 - NodeJS",
            "SU0203 - NoSQL",
            "SU0204 - OOPS",
            "SU0205 - Math 2",
            "SU0206 - EVS",
            "SU0207 - IR 01",
            "SU0208 - IR 02",
        ],
        mentors: [
            {
                name: "Ankita",
                batch: "SUxCG 714",
            },
        ],
        assignments: 0,
        pendingAssignments: 0,
        events: [],
    }
];
export const loginDetails = (uid, password) => {
    const student = students.find(
        (s) => s.uid === uid && s.password === password,
    );
    if (!student) return false;
    localStorage.setItem("user", JSON.stringify(student));
    return true;
};