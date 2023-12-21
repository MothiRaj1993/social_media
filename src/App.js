// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Footer from "./Footer";
// import Header from "./Header";
// import Home from "./Home";
// import Missing from "./Missing";
// import Nav from "./Nav";
// import NewPost from "./NewPost";
// import PostPage from "./PostPage";
// import EditPost from "./EditPost";
// import { DataProvider } from "./context/DataContext";

// function App() {
//   // const [posts, setPosts] = useState([
//   //   // {
//   //   //   id: 1,
//   //   //   title: "My first post",
//   //   //   datetime: "December 14 2023 15:17",
//   //   //   body: "Made a video about Tesla Q1 result",
//   //   // },
//   //   // {
//   //   //   id: 2,
//   //   //   title: "My 2nd post",
//   //   //   datetime: "December 14 2023 15:18",
//   //   //   body: "Made a video about Tesla Q2 result",
//   //   // },
//   //   // {
//   //   //   id: 3,
//   //   //   title: "My 3rd post",
//   //   //   datetime: "December 14 2023 15:19",
//   //   //   body: "Made a video about Tesla Q3 result",
//   //   // },
//   //   // {
//   //   //   id: 4,
//   //   //   title: "My 4th post",
//   //   //   datetime: "December 14 2023 15:20",
//   //   //   body: "Made a video about Tesla Q4 result",
//   //   // },
//   // ]);
//   // const [search, setSearch] = useState("");
//   // const [searchResults, setSearchResults] = useState([]);
//   // const [postTitle, setPostTitle] = useState("");
//   // const [postBody, setPostBody] = useState("");
//   // const [editTitle, setEditTitle] = useState("");
//   // const [editBody, setEditBody] = useState("");
//   // const navigate = useNavigate();
//   // const { width } = useWindowSize;
//   // const { data, fetchError, isLoading } = useAxiosFetch(
//   //   "http://localhost:3500/posts"
//   // );

//   // // useEffect(() => {
//   // //   const fetchPosts = async () => {
//   // //     try {
//   // //       const response = await api.get("/posts");
//   // //       setPosts(response.data);
//   // //     } catch (err) {
//   // //       if (err.response) {
//   // //         console.log(err.response.data);
//   // //         console.log(err.response.status);
//   // //         console.log(err.response.headers);
//   // //       } else {
//   // //         console.log(`Error: ${err.message}`);
//   // //       }
//   // //     }
//   // //   };
//   // //   fetchPosts();
//   // // }, []);

//   // useEffect(() => {
//   //   setPosts(data);
//   // }, [data]);

//   // useEffect(() => {
//   //   const filteredResults = posts.filter(
//   //     (post) =>
//   //       post.body.toLowerCase().includes(search.toLowerCase()) ||
//   //       post.title.toLowerCase().includes(search.toLowerCase())
//   //   );
//   //   setSearchResults(filteredResults.reverse());
//   // }, [posts, search]);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
//   //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
//   //   const newPost = { id, title: postTitle, datetime, body: postBody };
//   //   try {
//   //     const response = await api.post("/posts", newPost);
//   //     const allPosts = [...posts, response];
//   //     setPosts(allPosts);
//   //     setPostTitle("");
//   //     setPostBody("");
//   //     navigate("/");
//   //   } catch (err) {
//   //     if (err.response) {
//   //       console.log(err.response.data);
//   //       console.log(err.response.status);
//   //       console.log(err.response.headers);
//   //     } else {
//   //       console.log(`Error: ${err.message}`);
//   //     }
//   //   }
//   // };

//   // const handleEdit = async (id) => {
//   //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
//   //   const updatedPost = { id, title: editTitle, datetime, body: editBody };
//   //   try {
//   //     const response = await api.put(`/posts/${id}`, updatedPost);
//   //     setPosts(
//   //       posts.map((post) => (post.id === id ? { ...response.data } : post))
//   //     );
//   //     setEditTitle("");
//   //     setEditBody("");
//   //     navigate("/");
//   //   } catch (err) {
//   //     if (err.response) {
//   //       console.log(err.response.data);
//   //       console.log(err.response.status);
//   //       console.log(err.response.headers);
//   //     } else {
//   //       console.log(`Error: ${err.message}`);
//   //     }
//   //   }
//   // };

//   // const handleDelete = async (id) => {
//   //   try {
//   //     await api.delete(`posts/${id}`);
//   //     const postsList = posts.filter((post) => post.id !== id);
//   //     setPosts(postsList);
//   //     navigate("/");
//   //   } catch (err) {
//   //     if (err.response) {
//   //       console.log(err.response.data);
//   //       console.log(err.response.status);
//   //       console.log(err.response.headers);
//   //     } else {
//   //       console.log(`Error: ${err.message}`);
//   //     }
//   //   }
//   // };

//   return (
//     <div className="App">
//       {/* <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/postpage">Post page</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/newpost" element={<NewPost />} />
//         <Route path="/postpage" element={<PostLayout />}>
//           <Route index element={<PostPage />} />
//           <Route path=":id" element={<Posts />} />
//           <Route path="newpost" element={<NewPost />} />
//         </Route>
//         <Route path="*" element={<Missing />} />
//       </Routes> */}
//       <DataProvider>
//         <Header
//           title="A Social Media App
//       "
//         />
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="post">
//             <Route index element={<NewPost />} />{" "}
//             <Route path=":id" element={<PostPage />} />
//           </Route>
//           {/* <PostPage /> */}
//           <Route path="/edit/:id" element={<EditPost />}></Route>
//           <Route path="about" element={<About />} />
//           <Route path="*" element={<Missing />} />
//         </Routes>
//         <Footer />
//       </DataProvider>
//     </div>
//   );
// }

// export default App;

import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/postpage">Post page</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/postpage" element={<PostLayout />}>
          <Route index element={<PostPage />} />
          <Route path=":id" element={<Posts />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes> */}
      <DataProvider>
        <Header
          title="A Social Media App
      "
        />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />{" "}
            <Route path=":id" element={<PostPage />} />
          </Route>
          {/* <PostPage /> */}
          <Route path="/edit/:id" element={<EditPost />}></Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
