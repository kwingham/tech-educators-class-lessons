const blogPost = {
  title: "All about me!! 💝",
  author: {
    name: "Wigwam",
    age: 37,
    favoriteColour: "Teal",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
//   content: "This is my blog about learning objects and arrays", // Output 4
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
); // Output: There are 4 tags for post "My first blog post":
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]); // Output: coding, javascript, objects, arrays
}

// `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`);
// for (let i = 0; i < blogPost.tags.length; i++) {
// console.log(blogPost.tags[i]);
// };



// console.log(blogPost.author.name);
// console.log(blogPost.tags.length);
// console.log(blogPost.age);
// console.log(blogPost.favoriteColour);
