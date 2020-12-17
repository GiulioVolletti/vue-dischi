// Esercizio: (traccia presente anche nelle slide 35 su Drive)
// BONUS 2: Ordinare i dischi per anno di uscita.




var spotApp = new Vue (
  {
    el: "#wrapper",
    data: {
      // Utilizzando vue, stampiamo a schermo una card per ogni album.
      albumArray: [],
      genreArray: [],
      selected: "" ,
      conditionAlbum: true,
    },
    methods:{
      // BONUS: Creare una select con tutti i generi dei dischi. In base a
      // cosa scegliamo nella select, vedremo i corrispondenti cd.
      valueChange: function (){
        console.log(this.selected);
        this.conditionAlbum = false
        // console.log( "here", this.selected);

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

            for (var i = 0; i < result.data.response.length; i++) {
              if (!this.genreArray.includes(result.data.response[i].genre)) {
                this.genreArray.push(result.data.response[i].genre)
              }
            }
            this.albumArray = result.data.response;
            console.log(this.albumArray);
            this.albumArray.sort(compare)
            console.log(this.albumArray);
          }
      );

    },
  }
);
// console.log(spotApp.genreArray);

function compare( a, b ) {
  if ( a.year < b.year ){
    return -1;
  }
  if ( a.year > b.year ){
    return 1;
  }
  return 0;
}
