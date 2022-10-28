const { createApp } = Vue

createApp({
  data() {
    return{
        activeIndex: 0,
        fatto: false,
        isActive : false,

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
                done: true,
            },
            {
                text: 'scarpe',
                done: false,
            },
            {
                text: 'giacca',
                done: false,
            },
            {
                text: 'pantaloni',
                done: true,
            },
        ]

    }
},
    methods:{
        add(){
            let clone ={};
            for(let key in this.aggiunta){
                clone[key] = this.aggiunta[key]
            }
            if(this.aggiunta.text.length >= 5 ){
                this.list.unshift(clone);
                this.minlength = false;
            }else{
                this.minlength = true;
            }

           this.aggiunta.text = '';
        },
        removeTask(i){
            this.list.splice(i,1)
        },
        allerta(item){
          //  console.log('ciao')
          //  console.log(this.list.done)
          fatto = true;

        },
        checked(){

            this.isActive = !this.isActive;
        

        }


    },
    mounted(){
    }

}).mount('#app')