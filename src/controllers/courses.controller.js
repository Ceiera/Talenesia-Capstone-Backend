import coursesService from "../services/courses.service.js";

const addCourse = async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(
        payload.learningTrackId ||
        payload.courseName ||
        payload.courseDescription
      )
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const course = await coursesService.addCourse(payload);
    if (course === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(201).send({
      status: "success",
      message: "Course Succesfully Created",
      data: course,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await coursesService.getCourses();
    if (courses === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Courses Succesfully Retrieved",
      data: courses,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getCourseById = async (req, res) => {
  try {
    const id = req.params.courseId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing CourseId params",
        data: [],
      });
    }
    const course = await coursesService.getCourseById(id);
    if (course === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (course === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Course Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Course Succesfully Retrieved",
      data: course,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const updateCourseById = async (req, res) => {
  try {
    const id = req.params.courseId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing CourseId params",
        data: [],
      });
    }
    const payload = req.body;
    if (!(payload.courseName || courseDescription)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const course = await coursesService.updateCourseById(id, payload);
    if (course === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (course === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Course Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Course Succesfully Updated",
      data: course,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const deleteCourseById = async (req, res) => {
  try {
    const id = req.params.courseId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing CourseId params",
        data: [],
      });
    }
    const course = await coursesService.deleteCourseById(id);
    if (course === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (course === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Course Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Course Succesfully Deleted",
      data: [],
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const coursesController = {
  addCourse,
  getCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};

export default coursesController;
