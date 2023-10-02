import { createServer ,Model} from "miragejs";

export const setupServer = () => {
  let server = createServer({
    models:{
      todos:Model
    },
    route(){
      this.get('/api/todos',(schema)=>{
        return schema.todos.all();
      });
      
      this.post('/api/todos',(schema,request)=>{
        const payload=JSON.parse(request.requestBody);
        return schema.todos.create(payload);
      })
    }
  });
}; 
