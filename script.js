const { createApp } = Vue

createApp({
  data() {
    return{
        aggiunta:{
            text :'',
        },
        minlength : false,
        list:[
            {
                text: 'maglietta',
                done: false,
            },
            {
                text: 'pantaloni',
                done: false,
            }
        ]

    }
},
    methods:{
        add(){
            let clone ={};
            for(let key in this.aggiunta){
                clone[key] = this.aggiunta[key]
            }
            console.log(clone)
            if(this.aggiunta.text.length >= 5 ){
                this.list.unshift(clone);
                this.minlength = false;
            }else{
                this.minlength = true;
            }
            if(this.list.done === true){
                console.log('DOne true')
            }
         //   this.aggiunta = '';
        },
        removeTask(i){
            this.list.splice(i,1)
        },
        allerta(){
            console.log('ciao')
        }
    },
    mounted(){

    }

}).mount('#app')