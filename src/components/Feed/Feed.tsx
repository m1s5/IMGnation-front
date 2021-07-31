import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const mockGallery = [
  {
    authorId: "0",
    postId: "/feed/2007",
    image: "https://shop-api.kalashnikov.com/upload/iblock/8f5/8f589a3e41440de97614086414b0eea6.jpg",
    description: "some description",
    date: "2021-01-01"
  },
  {
    authorId: "1",
    postId: "/feed/2021",
    image: "https://shop-api.kalashnikov.com/upload/iblock/8c3/8c376070bacbf527484c4c0ae4579c84.jpg",
    description: "some description",
    date: "2021-01-01"
  },
  {
    authorId: "2",
    postId: "/feed/1487",
    image: "https://shop-api.kalashnikov.com/upload/iblock/58c/58cc95af1d1f9080fbba47e9785d3274.jpg",
    description: "some description",
    date: "2021-01-01"
  },
  {
    authorId: "3",
    postId: "/feed/1489",
    image: "https://shop-api.kalashnikov.com/upload/iblock/72d/72d5e84dd11050c3dbea1a755321b828.jpg",
    description: "some description",
    date: "2021-01-01"
  },
  {
    authorId: "4",
    postId: "/feed/4208",
    image: "https://shop-api.kalashnikov.com/upload/iblock/a4c/a4cb09fa2483d1a4a2ce1f719b8a99c8.jpg",
    description: "some description",
    date: "2021-01-01"
  },
  {
    authorId: "5",
    postId: "/feed/1255",
    image: "https://shop-api.kalashnikov.com/upload/iblock/d54/d541d5e263dc9fe328d33cc5cca87072.jpg",
    description: "some description",
    date: "2021-01-01"
  },
  {
    authorId: "6",
    postId: "/feed/5951",
    image: "https://shop-api.kalashnikov.com/upload/iblock/3a0/3a0bcf407d8c226d9437c3a0df967ca7.jpg",
    description: "some description",
    date: "2021-01-01"
  },
  {
    authorId: "7",
    postId: "/feed/1008",
    image: "https://shop-api.kalashnikov.com/upload/iblock/f60/f605ed872d70d296e29f310934351ede.jpg",
    description: "some description",
    date: "2021-01-01"
  },
  {
    authorId: "8",
    postId: "/feed/1274",
    image: "https://shop-api.kalashnikov.com/upload/iblock/2f0/2f0641cf479c46353b8def50703bd749.jpg",
    description: "some description",
    date: "2021-01-01"
  },
  {
    authorId: "9",
    postId: "/feed/2563",
    image: "https://shop-api.kalashnikov.com/upload/iblock/94a/94ad10c5ff6e37eba7d52daa29ccc664.jpg",
    description: "some description",
    date: "2021-01-01"
  },
  {
    authorId: "10",
    postId: "/feed/4242",
    image: "https://shop-api.kalashnikov.com/upload/iblock/e4e/e4ed15791443702fb1dab3e64ff50a41.jpg",
    description: "some description",
    date: "2021-01-01"
  },
];

const Card = (key:any, authorId: string, postId:string, image: string, description: string, date: string) =>{
return(
  <Link to={postId} className={style.link}>
  <div  key={key} className={style.card} >
    <img src={image} className={style.image} />
  </div>
</Link>
);
}


const Feed = () => {
  const [collections, setCollections] = useState(mockGallery);
  useEffect(() => {
    setCollections(mockGallery);
  }, []);

  const GalleryItems = collections.map((post, index) => (
    <Card key={index} authorId = {post.authorId} postId = {post.postId} image = {post.image} description={post.description} date={post.date}/>
  ));

  return <div className={style.cardsCollection}>{GalleryItems}</div>;
};

export default Feed;
