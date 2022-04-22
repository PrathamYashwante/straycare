require("dotenv").config();

const db = require("./db");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json()); //express middelware

//getting all posts
app.get("/api/v1/posts", async (req, res) => {
  try {
    const results = await db.query("select * from post");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        posts: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//getting individual post
app.get("/api/v1/posts/:id", async (req, res) => {
  try {
    const results = await db.query("select * from post where $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        post: results.rows[0],
      },
    });

    // console.log(results.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

//create a post
app.post("/api/v1/posts", async (req, res) => {
  try {
    const results = await db.query(
      "insert into post (postdesc, contactno, postlocation, animaltype) values($1, $2, $3, $4) returning *",
      [
        req.body.postdesc,
        req.body.contactno,
        req.body.postlocation,
        req.body.animaltype,
      ]
    );

    res.status(201).json({
      status: "success",
      data: {
        post: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//update a post
app.put("/api/v1/posts/:id", async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  try {
    const results = await db.query(
      "update post set postdesc = $1, contactno = $2, postlocation = $3, animaltype = $4 where id = $5 returning *",
      [
        req.body.postdesc,
        req.body.contactno,
        req.body.postlocation,
        req.body.animaltype,
        req.params.id,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "success",
      data: {
        post: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//delete a post 
app.delete("/api/v1/posts/:id", async (req, res) => {
  try {
    const results = await db.query("delete from post where id = $1", [req.params.id]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});
