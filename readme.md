
# Talenesia LMS Gamification
![image](https://socialify.git.ci/Ceiera/Talenesia-Capstone-Backend/image?issues=1&language=1&name=1&owner=1&pulls=1&stargazers=1&theme=Light)

Adding Gamification to Old Talenesia LMS

## Installation

Install my-project with npm or yarn

```bash
  npm install
  yarn install
```

Run Docker Image
```docker
  Backend
  docker build -t talenesia-capstone-backend .
  docker run -d -p 5000:5000 --name talenesia-capstone-backend talenesia-capstone-backend
```
## Features

- Login
- User Libraries
- User Progress
- User Badges




## Documentation

[Postman API](https://www.postman.com/crimson-meteor-816784/workspace/talenesia/collection/22908412-e35406f6-f827-46fa-8328-543f7f57eec4)


## Schema

### Badges Schema

```
  badgeId: {
    type: String,
    required: true,
  },
  badgeName: {
    type: String,
    required: true,
  },
  badgeDescription: {
    type: String,
    required: true,
  },
  badgeValue: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },

```

### Batches Schema

```
  batchId: {
    type: String,
    required: true,
  },
  learningTrackId: {
    type: String,
    required: true,
  },
  batchName: {
    type: String,
    required: true,
  },
  batchDescription: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  participant: {
    type: [{}],
  },
  mentor: {
    type: [{}],
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
```

### Courses Schema

```
  courseId: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
  },
  learningTrackId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
```

### Learning Tracks Schema

```
  learningTrackId: {
    type: String,
    required: true,
  },
  learningTrackName: {
    type: String,
    required: true,
  },
  learningTrackDescription: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
```

### Sub Courses Schema

```
  subCourseId: {
    type: String,
    required: true,
  },
  subCourseName: {
    type: String,
    required: true,
  },
  subCourseMaterial: {
    type: [{}],
    required: true,
  },
  subCourseType: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  openDate: {
    type: Date,
  },
  closeDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
```

### User Badges Schema

```
  userBadgesId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  badgeId: {
    type: String,
    required: true,
  },
  batchId: {
    type: String,
    required: true,
  },
  subCourseId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
```

### User Libraries Schema

```
  userLibrariesId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  batchId: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
```

### User Progress Schema

```
  userProgressId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  batchId: {
    type: String,
    required: true,
  },
  subCourseId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
```

### Users Schema

```
  userId: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userEmailVerifiedAt: {
    type: Date,
  },
  userFullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userAvatar: {
    type: String,
    required: true,
    default: "https://placehold.co/600x400.png",
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
```

### User Submissions Schema

```
  userSubmissionId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  batchId: {
    type: String,
    required: true,
  },
  subCourseId: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
```
