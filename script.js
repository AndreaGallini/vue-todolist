const { createApp } = Vue

createApp({
  data() {
    return{
        aggiunta:'',
        minlength : false,
        list:[
            {
                text: maglietta,
                done: false
            }
        ]

    }
},
    methods:{
        add(){
            if(this.aggiunta.length >= 5 ){
                this.list.push(this.aggiunta);
                this.minlength = false;
            }else{
                this.minlength = true;
            }
            this.aggiunta = '';
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