var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

(async ()=>{
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true,useFindAndModify: false });
    const db = mongoose.connection;
    db.on('error', function (error){
        console.log( 'mongoose connection error: ',error);
    });
    db.once('open', function () {
      console.log('mongoose open for business');
    });

    //Define a schema
    const studentSchema = new mongoose.Schema({
      name: String,
      age: Number,
      course: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'}
    });
    const courseSchema = new mongoose.Schema({
      courseName: String,
      noOfTopics: Number
    });

    //Creating a model
    const Student = mongoose.model('Student', studentSchema);
    const Course = mongoose.model('Course', courseSchema);

    try {
      
      const course = new Course({
        courseName: "AI",
        noOfTopics: 4
      });

      const courseSaveResult = await course.save();

      const student = new Student({
        name: "Inam",
        age: 30,
        course: courseSaveResult._id
      });

      const studentSaveResult = await student.save();

      console.log("Course save Result: ",courseSaveResult);
      console.log("Student save Result: ",studentSaveResult);

      
    }
    catch(error) {
      console.log(error);
    }
})();