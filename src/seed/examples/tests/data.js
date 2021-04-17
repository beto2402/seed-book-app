const GQL_COMMENT_ = {
    content: "",
    createdBy:  { id: 1},
    post:  { id: 1},
}
export const GQL_COMMENT = {
    comment: GQL_COMMENT_
}
export const GQL_COMMENTS = {
    comments: [ GQL_COMMENT_ ]
}
export const GQL_COMMENT_PAGINATION = {
    commentPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        comments: [ GQL_COMMENT_ ]
    }
}

export const API_COMMENT = {
    content: "",
    created_by_id:  1,
    post_id:  1,
}
export const API_COMMENTS = [API_COMMENT]

const GQL_POST_ = {
    content: "",
    picture: { url: "" },
    createdBy:  { id: 1},
    likedBy: [ { id: 1} ],
}
export const GQL_POST = {
    post: GQL_POST_
}
export const GQL_POSTS = {
    posts: [ GQL_POST_ ]
}
export const GQL_POST_PAGINATION = {
    postPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        posts: [ GQL_POST_ ]
    }
}

export const API_POST = {
    content: "",
    picture_id: 1,
    created_by_id:  1,
    liked_by_ids: [1],
}
export const API_POSTS = [API_POST]

const GQL_USER_ = {
    username: "email@test.com",
    firstName: "FirstName",
    lastName: "LastName",
    email: "email@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    isActive: true,
    profileImage: { url: "" },
}
export const GQL_USER = {
    user: GQL_USER_
}
export const GQL_USERS = {
    users: [ GQL_USER_ ]
}
export const GQL_USER_PAGINATION = {
    userPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        users: [ GQL_USER_ ]
    }
}

export const API_USER = {
    username: "email_1@test.com",
    first_name: "FirstName",
    last_name: "LastName",
    email: "email_1@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    is_active: false,
    profile_image_id: 1,
}
export const API_USERS = [API_USER]