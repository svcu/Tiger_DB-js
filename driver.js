const { rejects } = require("assert");
const {Socket} = require("net");
const { resolve } = require("path");

class Instance{

   

    constructor(uri = "127.0.0.1"){
        this.uri = uri;

    }

    async insert(key, value, ref=false, to=""){


        return new Promise((resolve, reject) =>{
            if (!ref){
                const body = {
                    instruction : "insert",
                    key: key,
                    entry: {
                        entry_type : "normal",
                        schema : "false",
                        vertices: [],
                        data: value
                    }
                }
    
                const socket = new Socket().connect(2310, this.uri, (e)=>{
                    if (e) throw e
                })
    
                socket.on("connect", (error)=>{
                    if (error) throw error
    
                    socket.write(JSON.stringify(body)+"\n", (e)=>{
                        if (e) throw e
                    })
                })
    
            
                socket.on("data", (data)=>{
                    console.log("BBB")
                    socket.write("close\n");
                    resolve(data.toString());
                })

                socket.on("error", (err)=>{
                    
                })
    
            }else{
                const body = {
                    instruction : "insert",
                    key: key,
                    entry: {
                        entry_type : "ref",
                        schema : to,
                        vertices: [],
                        data: value
                    }
                }
            }
        })
        
    }

    async get(key){

        return new Promise((resolve, reject)=>{
            const body = {
                instruction : "get",
                key: key,
            }
    
    
            const socket = new Socket().connect(2310, this.uri, (e)=>{
                if (e) throw e
            })
    
            socket.on("connect", (error)=>{
                if (error) throw error
    
                socket.write(JSON.stringify(body)+"\n", (e)=>{
                    if (e) throw e
                })

            })
    
            socket.on("data", (data)=>{
                resolve(JSON.parse(data.toString()));
                socket.destroy();
            })
        })

       
    }

    async dfs(key){

        return new Promise((resolve, reject)=>{
            const body = {
                instruction : "dfs",
                key: key,
            }
    
    
            const socket = new Socket().connect(2310, this.uri, (e)=>{
                if (e) throw e
            })
    
            socket.on("connect", (error)=>{
                if (error) throw error
    
                socket.write(JSON.stringify(body)+"\n", (e)=>{
                    if (e) throw e
                })

            })
    
            socket.on("data", (data)=>{
                resolve(JSON.parse(data.toString()));
                socket.destroy();
            })
        })

       
    }

    async update(key, property, value){

        return new Promise((resolve, reject)=>{
            const body = {
                instruction : "update",
                key: key,
                property: property,
                new_value: value
            }
    
    
            const socket = new Socket().connect(2310, this.uri, (e)=>{
                if (e) throw e
            })
    
            socket.on("connect", (error)=>{
                if (error) throw error
    
                socket.write(JSON.stringify(body)+"\n", (e)=>{
                    if (e) throw e
                })
            })
    
            socket.on("data", (data)=>{
                resolve(JSON.parse(data.toString()));
                socket.destroy();
            })
        })

       
    }

    async delete(key){

        return new Promise((resolve, reject) =>{
            const body = {
                instruction : "delete",
                key: key,
            }
    
    
            const socket = new Socket().connect(2310, this.uri, (e)=>{
                if (e) throw e
            })
    
            socket.on("connect", (error)=>{
                if (error) throw error
    
                socket.write(JSON.stringify(body)+"\n", (e)=>{
                    if (e) throw e
                })
    
            })
    
            socket.on("data", (data)=>{
                resolve(JSON.parse(data.toString()));
                socket.destroy();
            })
        })

    
    }

    async bfs(key){

        return new Promise((resolve, reject) =>{
            const body = {
                instruction : "bfs",
                key: key,
            }
    
    
            const socket = new Socket().connect(2310, this.uri, (e)=>{
                if (e) throw e
            })
    
            socket.on("connect", (error)=>{
                if (error) throw error
    
                socket.write(JSON.stringify(body)+"\n", (e)=>{
                    if (e) throw e
                })
    
                socket.write("close\n", (e)=>{
                    if (e) throw e
                })
            })
    
            socket.on("data", (data)=>{
                resolve(JSON.parse(data.toString()));
                socket.destroy();
            })
        })


      
    }

    async add_vertex(key, vertex){

        return new Promise((resolve, reject)=>{
            const body = {
                instruction : "add_vertex",
                key: key,
                vertex: vertex
            }
    
    
            const socket = new Socket().connect(2310, this.uri, (e)=>{
                if (e) throw e
            })
    
            socket.on("connect", (error)=>{
                if (error) throw error
    
                socket.write(JSON.stringify(body)+"\n", (e)=>{
                    if (e) throw e
                })
    
                socket.write("close\n", (e)=>{
                    if (e) throw e
                })
            })
    
            socket.on("data", (data)=>{
                resolve(JSON.parse(data.toString()));
                socket.destroy();
            })
        })

      
    }
}


module.exports = {
    Instance
}
