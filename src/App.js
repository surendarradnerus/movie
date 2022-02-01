import { useState } from 'react';
import './App.css';


function App() {
  
  const users = [
  
    {   profile:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg"
       ,name:"The Avengers"
       ,discription:"The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,[N 1] it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgård, and Samuel L. Jackson."
       ,Rating:"8/10"},
  
    {  profile:"https://themify.me/demo/themes/ptb-addon-submissions/files/2015/05/avengers.jpg"
       ,name:"Avengers:Age of Ultron"
       , discription:"Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron, an artificial intelligence obsessed with causing human extinction."
       ,Rating:"7.3/10"},
 
    {   profile:"https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg"
       ,name:"Avengers:Civil war"
       ,discription:"Captain America: Civil War is a 2016 American superhero film based on the Marvel Comics character Captain America, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Captain America: The First Avenger (2011) and Captain America: The Winter Soldier (2014), and the 13th film in the Marvel Cinematic Universe (MCU). The film was directed by Anthony and Joe Russo from a screenplay by the writing team of Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside an ensemble cast including Robert Downey Jr., Scarlett Johansson, Sebastian Stan, Anthony Mackie, Don Cheadle, Jeremy Renner, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Paul Rudd, Emily VanCamp, Tom Holland, Frank Grillo, William Hurt, and Daniel Brühl. In Captain America: Civil War, disagreement over international oversight of the Avengers fractures the team into two opposing factions—one led by Steve Rogers and the other by Tony Stark (Downey)."
       ,Rating:"7.8/10"},

    {  profile:"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
      ,name:"Avengers:infinity war"
      ,discription:"Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldaña, Josh Brolin, and Chris Pratt. In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe."
      ,Rating:"8.4/10"},

    {  profile:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
      ,name:"Avengers:End Game"
      ,discription:"Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse the destruction caused by Thanos in Infinity War."
      ,Rating:"8.4/10"},
  ]
  return (
    <section className='layout-main'>
    <div>
      <h1 className='header'>Avengers series list</h1>
      

    
    <div className="App">
      {/* {names.map((nm)=><Msg name={nm}/>)} */}
      {users.map((usr)=><Welcome
        profile={usr.profile}
        name={usr.name}
        discription={usr.discription}
        Rating={usr.Rating}
        
        
      />)}
      <Counter Rating/>
      <Dis/>
      
      </div>
      
    </div>
    </section>
  );
}
function Counter(){
  const[like,setLike] = useState(0);
  return(
    <div>
      <button onClick={()=>{ setLike(like+1); }}>👍 {like}</button>
     
    </div>
  )
}
function Dis(){
  const[dislike,setdisLike] = useState(0);
  return(
    <div>
      <button onClick={()=>{ setdisLike(dislike+1); }}>👎 {dislike}</button>
     
    </div>
  )
}
// function Msg({name}){
  
//   return(
//     <div className='welcome'>
//       <h2 >,{name}</h2> 
//     </div>
//   );
// }

function Welcome({name,profile,discription,Counter,Rating}){
  return(
    <div className='welcome'>
      < img className='profile-pics' src={profile}alt='profile pic' />
      
      
       <h2 className='movie-tile'>{name}</h2>
       <h4 className='dis'><b className='sum'>SUMMARY :</b> {discription}</h4>
       <h2 className='dis'><b className='sum'>RATING:</b>{Rating}</h2>
       
    </div>
  );
}

export default App;
