const songs = ['All Night', 'La La Love', 'Gotta Go', 'Sunrise']

songs.forEach(function(song, index){
    console.log(`${index+1}) ${song}`)
})

console.log('')
songs.forEach((song,index) => console.log(`${index+1}) ${song}`))
