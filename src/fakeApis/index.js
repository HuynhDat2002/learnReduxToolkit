import { createServer } from "miragejs";

export const setupServer = () => {
  let server = createServer();
  server.get("/api/todos", {
    todos: [
      { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
      { id: 2, name: "Learn Redux", completed: true, priority: "High" },
      { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
    ],
  });
};
