class User {
    name;
    lastName;
    username;
    password;
    age;
    activeCourses = [];
    
    constructor(name, lastName, username, password) {
        this.name = name;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }

    getActiveCourses() {
        return this.activeCourses;
    }
    setAge(age){
        this.age = age;
    }

    addCourse(newCourse){
        this.activeCourses.push(newCourse);
    }
}