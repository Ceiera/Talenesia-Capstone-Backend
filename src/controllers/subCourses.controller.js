import userBadgesService from "../services/userBadges.service.js";
import subCoursesService from "../services/subCourses.service.js";
const addSubCourse = async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(
        payload.subCourseName ||
        payload.subCourseMaterial ||
        payload.subCourseType||
        payload.courseId
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
      message: "Sub Course Succesfully Created",
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

const getAllSubCourses = async (req, res) => {
  try {
    const subCourses = await subCoursesService.getAllSubCourses();
    if (subCourses === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(200).send({
      status: "success",
      message: "Sub Course Succesfully Retrieved",
      data: subCourses,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};
const getSubCourseById = async (req, res) => {
  try {
    const subCourseId = req.params.subCourseId;
    const subCourse = await subCoursesService.getSubCourseById(subCourseId);
    if (subCourse === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (subCourse === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Sub Course Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Sub Course Succesfully Created",
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
    const subCourseId = req.params.subCourseId;
    if (!subCourseId) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      })
    }
    const payload = req.body;
    if (
      !(
        payload.subCourseName ||
        payload.subCourseMaterial ||
        payload.subCourseType ||
        payload.courseId
      )
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const subCourse = await subCoursesService.updateSubCourseById(
      subCourseId,
      payload
    );
    if (subCourse === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (subCourse === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Sub Course Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Sub Course Succesfully Updated",
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
    const subCourseId = req.params.subCourseId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const subCourse = await subCoursesService.deleteSubCourseById(subCourseId);
    if (subCourse === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (subCourse === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Sub Course Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Sub Course Succesfully Deleted",
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

const getBadgesBySubCourseId = async (req, res) => {
  try {
    const id = req.params.subCourseId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      })
    }
    const badges = await userBadgesService.getUserBadgeBySubCourseId(id);
    if (badges === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (badges === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Badges Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Badges Succesfully Retrieved",
      data: badges,
    })
  } catch (error) {
    
  }
}

const subCoursesController = {
  addSubCourse,
  getAllSubCourses,
  getSubCourseById,
  updateSubCourseById,
  deleteSubCourseById,
  getBadgesBySubCourseId
}

export default subCoursesController;