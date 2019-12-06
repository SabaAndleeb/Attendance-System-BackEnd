import { StudentController, CourseController } from "../controllers";
import { AttendanceController } from "../controllers/attendance";
import { DegreeController } from "../controllers/degree";
import { ProgrammeController } from "../controllers/programme";
import { TeacherController } from "../controllers/teacher";
import { ClassesController } from "../controllers/classes";

export class Routes { 

    public studentController: StudentController = new StudentController();
    public teacherController: TeacherController = new TeacherController(); 
    public attendanceController : AttendanceController = new AttendanceController();
    public degreeController : DegreeController = new DegreeController();
    public programmeController : ProgrammeController = new ProgrammeController();
    public courseController : CourseController  = new CourseController();
    public classesController  : ClassesController = new ClassesController();

    constructor(){}

    public routes(app: any): void {   
      
      //Student Route
      app.route('/api/students').get(this.studentController.getStudents);
      app.route('/api/add-student').post(this.studentController.addNewStudent);
      app.route('/api/update-all-students').put(this.studentController.updateAllStudents);

      //Teacher Route
      app.route('/api/teachers').get(this.teacherController.getTeachers);
      app.route('/api/add-teacher').post(this.teacherController.addNewTeacher);

      //Attendance Route
      app.route('/api/attendance').get(this.attendanceController.getAttendance);
      app.route('/api/save-attendance').post(this.attendanceController.saveAttendance);

      //Degree Route
      app.route('/api/degree').get(this.degreeController.getDegree);
      app.route('/api/add-degree').post(this.degreeController.saveDegree);

      //Course Route
      app.route('/api/courses').get(this.courseController.getCourse);
      app.route('/api/add-course').post(this.courseController.saveCourse);

      //Programme Route
      app.route('/api/programmeDetails/:id').get((this.programmeController.getProgramme));
      app.route('/api/degreeProgrammes/:degreeId').get((this.programmeController.getProgramme));
      app.route('/api/add-programme').post(this.programmeController.saveProgramme);

      //Classes Route
      app.route('/api/classes').get(this.classesController.getClass);
      app.route('/api/class/:id').get(this.classesController.getClass);
      app.route('/api/classProgrammes/:classId').get(this.classesController.getClassProgrammes);
      app.route('/api/classStudents/:classId').get(this.classesController.getClassStudents);
      app.route('/api/add-class').post(this.classesController.saveClass);

      
    }   
}