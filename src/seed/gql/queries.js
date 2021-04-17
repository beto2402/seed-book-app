/*
__Seed builder__v0.2.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const COMMENT = `
{
  comment {
    id
    content
    createdBy {
      id
    }
    post {
      id
    }
  }
}
`;

export const SET_COMMENT = `
mutation Set(
  $id: Int!,
  $content: String,
  $createdBy: Int,
  $post: Int,
)
{
  setComment(
    id: $id,
    content: $content,
    createdBy: $createdBy,
    post: $post,
  ) {
    comment {
      id
      content
      createdBy {
        id
      }
      post {
        id
      }
    }
  }
}
`;

export const SAVE_COMMENT = `
mutation Save(
  $content: String!,
  $createdBy: Int!,
  $post: Int!,
)
{
  saveComment(
    content: $content,
    createdBy: $createdBy,
    post: $post,
  ) {
    comment {
      id
    }
  }
}
`;

export const DELETE_COMMENT = `
mutation Delete($id: Int!)
{
  deleteComment(id: $id)
  {
    id
  }
}
`;

export const POST = `
{
  post {
    id
    content
    picture {
      id
    }
    createdBy {
      id
    }
    likedBy {
      id
    }
  }
}
`;

export const SET_POST = `
mutation Set(
  $id: Int!,
  $content: String,
  $picture: Int,
  $createdBy: Int,
  $likedBy: [Int],
)
{
  setPost(
    id: $id,
    content: $content,
    picture: $picture,
    createdBy: $createdBy,
    likedBy: $likedBy,
  ) {
    post {
      id
      content
      picture {
        id
      }
      createdBy {
        id
      }
      likedBy {
        id
      }
    }
  }
}
`;

export const SAVE_POST = `
mutation Save(
  $content: String!,
  $picture: Int!,
  $createdBy: Int!,
  $likedBy: [Int],
)
{
  savePost(
    content: $content,
    picture: $picture,
    createdBy: $createdBy,
    likedBy: $likedBy,
  ) {
    post {
      id
    }
  }
}
`;

export const DELETE_POST = `
mutation Delete($id: Int!)
{
  deletePost(id: $id)
  {
    id
  }
}
`;

export const USER = `
{
  user {
    id
    username
    firstName
    lastName
    email
    isActive
    profileImage {
      id
    }
  }
}
`;

export const SET_USER = `
mutation Set(
  $id: Int!,
  $username: String,
  $firstName: String,
  $lastName: String,
  $email: String,
  $isActive: Boolean,
  $password: String,
  $profileImage: Int,
)
{
  setUser(
    id: $id,
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
    profileImage: $profileImage,
  ) {
    user {
      id
      username
      firstName
      lastName
      email
      isActive
      profileImage {
        id
      }
    }
  }
}
`;

export const SAVE_USER = `
mutation Save(
  $username: String!,
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $isActive: Boolean!,
  $password: String!,
  $profileImage: Int!,
)
{
  saveUser(
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
    profileImage: $profileImage,
  ) {
    user {
      id
    }
  }
}
`;

export const DELETE_USER = `
mutation Delete($id: Int!)
{
  deleteUser(id: $id)
  {
    id
  }
}
`;