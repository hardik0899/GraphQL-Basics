import {nanoid} from 'nanoid'

class Course {
    constructor(id, {
        courseName, category, price, language, email, stack,teachingAssists 
    }) {
        this.id = id
        this.courseName = courseName
        this.category = category
        this.price = price
        this.language = language
        this.email = email
        this.stack = stack
        this.teachingAssists = teachingAssists
    }
}

const courseholder = {}

const resolvers = {
    getCourse : ({ id }) => {
        return new Course(id, courseholder[id])
    },
    createCourse: ({ input }) => {
        let id = nanoid()
        courseholder[id] = input
        return new Course(id, input)
    }
}

export default resolvers;