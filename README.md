## API Endpoints

### Success Response Format

```json
{
  "status": "success",
  "message": "Success message",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe"
    }
  }
}
```

### Error Response Format

```json
{
  "status": "Error",
  "message": "Error message"
}
```

### Auth

#### The following endpoints are used for authentication

- `POST api/v1/auth/signup-master` - Create a master user
- `POST api/v1/auth/login` - Login a user

### University

#### The following endpoints are used for university

- `POST api/v1/university` - Create university
- `GET api/v1/university` - Retrieve all universities (with pagination)
- `GET api/v1/university/:id` - Retrieve a university
- `PATHCH api/v1/university/:id` - Update a university
- `DELETE api/v1/university/:id` - Delete a university

### Collage Type

#### The following endpoints are used for collage type

- `POST api/v1/collage-type` - Create collage type
- `GET api/v1/collage-type` - Retrieve all collage types (with pagination)
- `GET api/v1/collage-type/:id` - Retrieve a collage type
- `PATHCH api/v1/collage-type/:id` - Update a collage type
- `DELETE api/v1/collage-type/:id` - Delete a collage type

### Collage

#### The following endpoints are used for collage

- `POST api/v1/university/:uniId/collage` - Create collage
- `GET api/v1/university/:uniId/collage` - Retrieve all collages (with pagination)
- `GET api/v1/university/:uniId/collage/:id` - Retrieve a collage
- `PATHCH api/v1/university/:uniId/collage/:id` - Update a collage
- `DELETE api/v1/university/:uniId/collage/:id` - Delete a collage

### Collage Type

#### The following endpoints are used for collage

- `POST api/v1/collage-type` - Create collage type
- `GET api/v1/collage-type` - Retrieve all collage types (with pagination)
- `GET api/v1/collage-type/:id` - Retrieve a collage type
- `PATHCH api/v1/collage-type/:id` - Update a collage type
- `DELETE api/v1/collage-type/:id` - Delete a collage type

### Level

#### The following endpoints are used for level

- `POST api/v1/university/:uniId/collage/:colId/level` - Create level
- `GET api/v1/university/:uniId/collage/:colId/level` - Retrieve all levels (with pagination)
- `GET api/v1/university/:uniId/collage/:colId/level/:id` - Retrieve a level
- `PATHCH api/v1/university/:uniId/collage/:colId/level/:id` - Update a level
- `DELETE api/v1/university/:uniId/collage/:colId/level/:id` - Delete a level

### Program

#### The following endpoints are used for program

- `POST api/v1/university/:uniId/collage/:colId/level/:levId/program` - Create program
- `GET api/v1/university/:uniId/collage/:colId/level/:levId/program` - Retrieve all programs (with pagination)
- `GET api/v1/university/:uniId/collage/:colId/level/:levId/program/:id` - Retrieve a program
- `PATHCH api/v1/university/:uniId/collage/:colId/level/:levId/program/:id` - Update a program
- `DELETE api/v1/university/:uniId/collage/:colId/level/:levId/program/:id` - Delete a program

### Department

#### The following endpoints are used for department

- `POST api/v1/university/:uniId/collage/:colId/level/:levId/program/:progId/department` - Create department
- `GET api/v1/university/:uniId/collage/:colId/level/:levId/program/:progId/department` - Retrieve all departments (with pagination)
- `GET api/v1/university/:uniId/collage/:colId/level/:levId/program/:progId/department/:id` - Retrieve a department
- `PATHCH api/v1/university/:uniId/collage/:colId/level/:levId/program/:progId/department/:id` - Update a department
- `DELETE api/v1/university/:uniId/collage/:colId/level/:levId/program/:progId/department/:id` - Delete a department

### Storage

#### The following endpoints are used for storage

- `POST api/v1/storage/:id` - Upload a file
- `GET api/v1/storage/:id` - Download a file
- `DELETE api/v1/storage/:id` - Auto delete system

### Admin

#### The following endpoints are used for admin

- `POST api/v1/university/:uniId/collage/:colId/level/:levId/admin` - Create admin
- `GET api/v1/university/:uniId/collage/:colId/level/:levId/admin` - Retrieve all admins (with pagination)
- `GET api/v1/university/:uniId/collage/:colId/level/:levId/admin/:id` - Retrieve a admin
- `PATHCH api/v1/university/:uniId/collage/:colId/level/:levId/admin/:id` - Update a admin
- `DELETE api/v1/university/:uniId/collage/:colId/level/:levId/admin/:id` - Delete a admin

### Professor

#### The following endpoints are used for professor

- `POST api/v1/university/:uniId/collage/:colId/professor` - Create professor
- `GET api/v1/university/:uniId/collage/:colId/professor` - Retrieve all professors (with pagination)
- `GET api/v1/university/:uniId/collage/:colId/professor/:id` - Retrieve a professor
- `PATHCH api/v1/university/:uniId/collage/:colId/professor/:id` - Update a professor
- `DELETE api/v1/university/:uniId/collage/:colId/professor/:id` - Delete a professor
