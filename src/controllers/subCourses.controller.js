import subCoursesService from "../services/subCourses.service.js";

const addSubCourse = async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(
        payload.subCourseName ||
        payload.subCourseMaterial ||
        payload.subCourseType
      )
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const subCourse = await subCoursesService.addSubCourse(payload);
    if (subCourse === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(201).send({
      status: "success",
      message: "SubCourse Succesfully Created",
      data: subCourse,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
};

const getSubCourses = async (req, res) => {
  try {
    const subCourses = await subCoursesService.getSubCourses();
    if (subCourses === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "SubCourses Succesfully Retrieved",
      data: subCourses,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server sError",
      data: [],
    });
  }
};

const getSubCourseById = async (req, res) => {
  try {
    const id = req.params.subCourseId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing SubCourseId params",
        data: [],
      });
    }
    const subCourse = await subCoursesService.getSubCourseById(id);
    if (subCourse === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (subCourse === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "SubCourse Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "SubCourse Succesfully Retrieved",
      data: subCourse,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const updateSubCourseById = async (req, res) => {
  try {
    const id = req.params.subCourseId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing SubCourseId params",
        data: [],
      });
    }
    const payload = req.body;
    if (!(payload.subCourseName || payload.subCourseMaterial || payload.subCourseType)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const subCourse = await subCoursesService.updateSubCourseById(id, payload);
    if (subCourse === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (subCourse === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "SubCourse Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "SubCourse Succesfully Updated",
      data: subCourse,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const deleteSubCourseById = async (req, res) => {
  try {
    const id = req.params.subCourseId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing SubCourseId params",
        data: [],
      });
    }
    const subCourse = await subCoursesService.deleteSubCourseById(id);
    if (subCourse === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (subCourse === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "SubCourse Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "SubCourse Succesfully Deleted",
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

const subSubCoursesController = {
  addSubCourse,
  getSubCourses,
  getSubCourseById,
  updateSubCourseById,
  deleteSubCourseById,
};

export default subSubCoursesController;
