import React, {useEffect, useState} from 'react';
import axios from 'axios';

const List = () => {
  const [data, setData] = useState([]);

  // async function getPost() {
  //   await axios.get('/api/post/')
  //     .then((res) => {
  //     const result1 = res.data
  //     setData(result1)
  //   })
  //   .catch()
  // }

  useEffect(() => {
    //getPost();
    console.log('2222222222222222')
    getPostById();  
  });

   function getPostById() {
     axios.get('/api/post/:id')
      .then((res) => {
      console.log(`res = ${res}`);
      // console.log(`typeof res = ${typeof(res)}`);
      
      // console.log(`typeof(result) = ${typeof(result)}`); 
      if(res.data.retvalue === 1){
        const result = res.data.results
        console.log(result)
        setData(result)
      }
    })
    .catch()
  }


  console.log(`24번째 줄 ${data}`);
  return (
    <div>
     {data?.map((el) => (
        el.title
      ))}
      {data[0].title}
    </div>
  );

};

export default List;