const {Socket} = require("net")

class Instance{
    constructor(uri){
        this.uri = uri;

        const socket = new Socket().connect(2310, this.uri, (e)=>{
            if (e) console.error(e)
            socket.write("close\n");
            socket.destroy();
        });
    }

    insert(key, value, ref=false, to=""){
        
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

            console.log(string)

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
                socket.destroy()
                return data.toString();
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
    }

    get(key){

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

            socket.write("close\n", (e)=>{
                if (e) throw e
            })
        })

        socket.on("data", (data)=>{
            socket.destroy();
            return data.toJSON();
        })
    }

    dfs(key){

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

            socket.write("close\n", (e)=>{
                if (e) throw e
            })
        })

        socket.on("data", (data)=>{
            socket.destroy();
            return data.toJSON();
        })
    }

    update(key, property, value){
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

            socket.write("close\n", (e)=>{
                if (e) throw e
            })
        })

        socket.on("data", (data)=>{
            socket.destroy();
            return data.toJSON();
        })
    }

    delete(key){

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

            socket.write("close\n", (e)=>{
                if (e) throw e
            })
        })

        socket.on("data", (data)=>{
            socket.destroy();
            return data.toJSON();
        })
    }

    bfs(key){

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
            socket.destroy();
            return data.toJSON();
        })
    }

    add_vertex(key, vertex){

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
            socket.destroy();
            return data.toJSON();
        })
    }
}

module.exports = {
    Instance
}