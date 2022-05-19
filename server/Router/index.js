const express = require('express');
const router = express.Router();
const db = require('../config/db')

router.get('/post', (req, res) => {
  const sql = 'SELECT * FROM Board';

  db.query(sql, (err, result) => {
    if(!err) res.send(result);
    else res.send(err);
  })
});

router.get('/post/:id', (req, res) => {
  var returnValue = new Object();
  Object.assign(returnValue, { retvalue: 0 });
  Object.assign(returnValue, {message: "데이터를 가져오는 중에 오류가 발생했습니다."});
  const sql = 'SELECT * FROM Board';
  console.log(sql);

  db.query(sql, (err, result) => {
    //console.log(result);
    if (!err) {
      returnValue["retvalue"] = 1;
      returnValue["message"] = "데이터를 정상적으로 가져왔습니다.";
      Object.assign(returnValue, { results: result });
      console.log("yes", returnValue);
    } else {
      returnValue["message"] = "데이터를 발견할 수 없습니다.";
    }
    res.send(returnValue);
  })
});

//  //sns로그인
//  app.post("/snsLogin", (req, res) => {
//   var returnValue = new Object();
//   Object.assign(returnValue, { retvalue: 0 });
//   Object.assign(returnValue, {message: "로그인을 진행하는 중에 오류가 발생했습니다."});

//   const mem_id = req.body.mem_id;
//   const mem_type = req.body.mem_type; //등록형식(0:일반/1:네이머/2:카카오/3:구글)

//   const sql = `SELECT COUNT(*) AS tcount FROM member WHERE mem_id='${mem_id}' and mem_type='${mem_type}';`;
//   connection.query(sql, (err, result, fields) => {
//     if (!err) {
//       if (result[0].tcount === 0) {
//         console.log("no");
//         returnValue["message"] = "등록된 회원이 아닙니다.";
//         res.send(returnValue);
//       } else {
//         const sql1 = `SELECT * FROM member WHERE mem_id='${mem_id}'`;
//         connection.query(sql1, (err, result, fields) => {
//           if (!err) {
//             returnValue["retvalue"] = 1;
//             returnValue["message"] = "정상적으로 로그인되었습니다.";
//             Object.assign(returnValue, { results: result[0] });
//             console.log("yes", returnValue);
//           } else {
//             returnValue["message"] = "회원정보를 발견할 수 없습니다.";
//           }
//           res.send(returnValue);
//         });
//       }
//     }
//   });
// });

// router.post('/post', (req, res) => {
// 	const sql = 'INSERT INTO Board (title, comment) VALUES (?, ?);';

//   const {id, title, comment} = req.body;
  
// 	connection.query(sql, params, (err, result) => {
// 		if (!err) {
// 			res.send(result)
// 		} else {
// 			res.send(err)
// 		}
// 	})
// });


module.exports = router;