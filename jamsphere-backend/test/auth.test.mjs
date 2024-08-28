import * as chai from "chai";
import chaiHttp from "chai-http";
import server from "../server.js";
import mongoose from "mongoose";
import User from "../models/User.js";

chai.use(chaiHttp);
chai.should(); // Use should() if you're using `should`

describe("Auth API", function () {
  this.timeout(10000); // Adjust timeout if needed

  // Before running the tests, ensure the database is connected
  before(async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.MONGO_DB_NAME,
      });
    }
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it("should register a new user", (done) => {
    const user = {
      username: "TestUser1",
      email: "test@example.com",
      password: "password123",
    };

    chai
      .post("/api/auth/register")
      .send(user)
      .end((err, res) => {
        if (err) return done(err); // Handle error
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("token");
        done();
      });
  });

  it("should log in a user", (done) => {
    const user = new User({
      username: "TestUser1",
      email: "test@example.com",
      password: "password123",
    });

    user
      .save()
      .then(() => {
        chai
          .post("/api/auth/login")
          .send({ email: "test@example.com", password: "password123" })
          .end((err, res) => {
            if (err) return done(err); // Handle error
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("token");
            done();
          });
      })
      .catch(done); // Handle save error
  });

  // Close the database connection after all tests
  after(async () => {
    await mongoose.connection.close();
  });
});
