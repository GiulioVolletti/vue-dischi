// Esercizio: (traccia presente anche nelle slide 35 su Drive)
// BONUS: Creare una select con tutti i generi dei dischi. In base a
// cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.




var spotApp = new Vue (
  {
    el: "#wrapper",
    data: {
      // Utilizzando vue, stampiamo a schermo una card per ogni album.
      albumArray: [],
      genreArray: [],
      selectedGenre: " ",
    },
    methods:{
      valueChange: function (){
        console.log( "here");
      },
    },
    mounted: function ()  {
      console.log("hello world");
      // Attraverso una chiamata ajax all’API di boolean
      // https://flynn.boolean.careers/exercises/api/array/music
      // avremo a disposizione una decina di dischi musicali.
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
          .then((result) => {
            // console.log(result);
            console.log(this.albumArray);
            for (var i = 0; i < result.data.response.length; i++) {
              if (!this.genreArray.includes(result.data.response[i].genre)) {
                this.genreArray.push(result.data.response[i].genre)
              }
            }
            this.albumArray = result.data.response

            console.log(this.genreArray);
          }
      );

    },
  }
);
// console.log(spotApp.genreArray);
