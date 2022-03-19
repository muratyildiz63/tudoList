Vue.createApp({

    data() {
        return {
            tudoList: [

                {
                    id: 1,
                    text: "Liste 1",
                    completed: false
                },
                {
                    id: 2,
                    text: "Liste 2",
                    completed: false
                },
                {
                    id: 3,
                    text: "Liste 3",
                    completed: false
                },
                {
                    id: 4,
                    text: "Liste 4",
                    completed: false
                },

            ]
        }
    },
    methods: {
        addTudo(event) {
            var lgAr = new Date().getTime()
            this.tudoList.push({
                id: lgAr,
                text: event.target.value,
                completed: false
            });

        },
        deleteTudo(postTudo) {
            console.log(postTudo)
            this.tudoList = this.tudoList.filter(tudo => tudo != (postTudo))
        },
        SecilenleriSil() {
            this.tudoList = this.tudoList.filter(tudo => tudo.completed == false)
        },
        murat(event) {
            console.log(event)
        }


    },


}).mount('#app');