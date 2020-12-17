// Esercizio: (traccia presente anche nelle slide 35 su Drive)
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a
// cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.




var spotApp = new Vue (
  {
    el: ".container",
    data: {
      albumArray: [],
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
            this.albumArray = result.data.response
            console.log(this.albumArray);
            }
          );
    },
  }
);
