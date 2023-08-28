const io = window.io();

io.connect("/");

io.on("hello", (data) => {
  console.log(data);
});
