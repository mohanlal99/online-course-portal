import {request,gql} from 'graphql-request'
const Master_Url = 'https://api-ap-south-1.hygraph.com/v2/'+process.env.NEXT_PUBLIC_HYGRAPH_API_KEYS+'/master'

const getAllCourseList = async ()=>{
    const qurey = gql`
    query getAllCourses {
  courses(first: 20, orderBy: createdAt_DESC) {
    author
    banner {
      id
      url
    }
    demoUrl
    description
    free
    id
    name
    slug
    totalChapters
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
  }
}
    `;
    const result = await request(Master_Url,qurey);
    return result
}
const getSideBanner = async ()=>{
    const qurey = gql`
    query GetSideBanner {
  sideBanners(orderBy: updatedAt_DESC) {
    id
    name
    url
    banner {
      id
      url
    }
  }
}

    `;
    const result = await request(Master_Url,qurey);
    return result
}
const getCourseById = async (courseId)=>{
    const qurey = gql`
  query GetCourseById {
  course(where: {slug: "`+courseId+`"}) {
    author
    banner {
      url
    }
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    demoUrl
    description
    free
    id
    name
    slug
    totalChapters
    tag
    sourceCode
  }
}
    `;
    const result = await request(Master_Url,qurey);
    return result
}
const EnrollToCourse = async (courseId,email)=>{
    const qurey = gql`
mutation MyMutation {
  createUserEnrollCourse(
    data: {courseId: "`+courseId+`", userEmail: "`+email+`", course: {connect: {slug: "`+courseId+`"}}}
  ) {
    id
  }
  publishManyUserEnrollCoursesConnection{
    edges{
      node{
        id
      }
    }
  }

}
    `;


    const result = await request(Master_Url,qurey);
    return result
}
const CheckUserEnrollToCourse = async (courseId,email)=>{
    const qurey = gql`
query MyQuery {
  userEnrollCourses(where: {courseId: "`+courseId+`", userEmail: "`+email+`"}) {
    id
  }
}
 `;


    const result = await request(Master_Url,qurey);
    return result
}
const getUserEnrollCourse = async (id,email)=>{
    const qurey = gql`
query MyQuery {
  userEnrollCourses(where: {id: "`+id+`", userEmail: "`+email+`"}) {
    courseId
    id
    userEmail
    completedChpater {
      ... on CompletedChapter {
        id
        chapterId
      }
    }
    course {
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          shortDesc
          video {
            url
          }
        }
      }
      demoUrl
      description
      free
      id
      name
      slug
      totalChapters
    }
  }
}`;


    const result = await request(Master_Url,qurey);
    return result
}

const markChapterCompleted = async (enrollId,chapterId)=>{
  const qurey = gql`
  mutation MyMutation {
  updateUserEnrollCourse(
    data: {completedChpater: {create: {CompletedChapter: {data: {chapterId: "`+chapterId+`" }}}}}
    where: {id: "`+enrollId+`"}
  ) {
    id
  }
  publishUserEnrollCourse(where: {id: "`+enrollId+`"}) {
    id
  }
}

  `

  const result = await request(Master_Url,qurey);
  return result;
}
const getInProgressCourse = async (email)=>{
  const qurey = gql`
  query MyQuery {
  userEnrollCourses(where: {userEmail: "`+email+`"}) {
    completedChpater {
      ... on CompletedChapter {
        id
        chapterId
      }
    }
    course {
      name
      id
      totalChapters
      banner {
        id
        url
      }
      slug
      author
      demoUrl
      description
      chapter {
        ... on Chapter {
          id
          name
        }
      }
    }
  }
}

  `;
  const result = await request(Master_Url,qurey);
  return result;
}

const createActiveMembership = async (email,joinDate)=>{
  const qurey = gql`
mutation MyMutation {
  createMembership(data: {active: true, email: "`+email+`" , joinDate: "`+joinDate+`"}) {
    active
    id
    email
  }
  publishManyMembershipsConnection {
    edges {
      node {
        id
      }
    }
  }
}


  `;
  const result = await request(Master_Url , qurey)
  return result;

}

const getCheckActiveMembership = async (email)=>{
  const qurey = gql`
  query MyQuery {
  memberships(where: {email: "`+email+`"}) {
    email
    active
  }
}

  `;
  const result = await request( Master_Url,qurey );
  return result;
}

const createContactInfo = async(email,subject,message)=>{
  const qurey = gql`
  mutation MyMutation {
  createContact(data: {email: "`+email+`", subject: "`+subject+`", message: "`+message+`"}) {
    id
  }
  publishManyContactsConnection{
    edges{
      node{
        id
      }
    }
  }
}

  `;
  const result = await request(Master_Url,qurey)
  return result;
}


export default {
  getAllCourseList,
  getSideBanner,
  getCourseById,
  EnrollToCourse,
  CheckUserEnrollToCourse,
  getUserEnrollCourse,
  markChapterCompleted,
  getInProgressCourse,
  createActiveMembership,
  getCheckActiveMembership,
  createContactInfo
};
